from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class InstallKubernetesRequestBody:
    addon_slugs: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addon_slugs' }})
    cluster_uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_uuid' }})
    

@dataclass
class InstallKubernetesRequest:
    request: InstallKubernetesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class InstallKubernetes200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class InstallKubernetes401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class InstallKubernetesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    install_kubernetes_200_application_json_object: Optional[InstallKubernetes200ApplicationJSON] = field(default=None)
    install_kubernetes_401_application_json_object: Optional[InstallKubernetes401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
