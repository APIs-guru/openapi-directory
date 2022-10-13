from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListKubernetesAssociatedResourcesPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListKubernetesAssociatedResourcesRequest:
    path_params: ListKubernetesAssociatedResourcesPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ListKubernetesAssociatedResources200ApplicationJSONLoadBalancers:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class ListKubernetesAssociatedResources200ApplicationJSON:
    load_balancers: Optional[List[ListKubernetesAssociatedResources200ApplicationJSONLoadBalancers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    volume_snapshots: Optional[List[shared.Onev21kubernetes1clusters1Percent7BclusterIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_snapshots' }})
    volumes: Optional[List[shared.Onev21kubernetes1clusters1Percent7BclusterIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass_json
@dataclass
class ListKubernetesAssociatedResources401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListKubernetesAssociatedResourcesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_kubernetes_associated_resources_200_application_json_object: Optional[ListKubernetesAssociatedResources200ApplicationJSON] = field(default=None)
    list_kubernetes_associated_resources_401_application_json_object: Optional[ListKubernetesAssociatedResources401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
