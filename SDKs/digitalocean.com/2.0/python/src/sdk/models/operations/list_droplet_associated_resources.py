from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListDropletAssociatedResourcesPathParams:
    droplet_id: int = field(default=None, metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDropletAssociatedResourcesRequest:
    path_params: ListDropletAssociatedResourcesPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ListDropletAssociatedResources200ApplicationJSONSnapshots:
    cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class ListDropletAssociatedResources200ApplicationJSON:
    snapshots: Optional[List[ListDropletAssociatedResources200ApplicationJSONSnapshots]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshots' }})
    volume_snapshots: Optional[List[shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_snapshots' }})
    volumes: Optional[List[shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass_json
@dataclass
class ListDropletAssociatedResources401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListDropletAssociatedResourcesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_droplet_associated_resources_200_application_json_object: Optional[ListDropletAssociatedResources200ApplicationJSON] = field(default=None)
    list_droplet_associated_resources_401_application_json_object: Optional[ListDropletAssociatedResources401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
