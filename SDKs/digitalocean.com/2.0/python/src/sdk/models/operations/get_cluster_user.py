from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetClusterUserPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClusterUserRequest:
    path_params: GetClusterUserPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetClusterUser200ApplicationJSONKubernetesClusterUser:
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class GetClusterUser200ApplicationJSON:
    kubernetes_cluster_user: Optional[GetClusterUser200ApplicationJSONKubernetesClusterUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetes_cluster_user' }})
    

@dataclass_json
@dataclass
class GetClusterUser401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetClusterUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_cluster_user_200_application_json_object: Optional[GetClusterUser200ApplicationJSON] = field(default=None)
    get_cluster_user_401_application_json_object: Optional[GetClusterUser401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
