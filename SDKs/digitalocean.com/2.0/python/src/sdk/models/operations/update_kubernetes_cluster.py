from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateKubernetesClusterPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateKubernetesClusterRequestBody:
    auto_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_upgrade' }})
    maintenance_policy: Optional[shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenance_policy' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    surge_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surge_upgrade' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class UpdateKubernetesClusterRequest:
    path_params: UpdateKubernetesClusterPathParams = field(default=None)
    request: UpdateKubernetesClusterRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateKubernetesCluster401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateKubernetesClusterResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_kubernetes_cluster_202_application_json_any: Optional[Any] = field(default=None)
    update_kubernetes_cluster_401_application_json_object: Optional[UpdateKubernetesCluster401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
