from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteKubernetesNodePoolPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    node_pool_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_pool_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteKubernetesNodePoolRequest:
    path_params: DeleteKubernetesNodePoolPathParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteKubernetesNodePool401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class DeleteKubernetesNodePoolResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    delete_kubernetes_node_pool_401_application_json_object: Optional[DeleteKubernetesNodePool401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
