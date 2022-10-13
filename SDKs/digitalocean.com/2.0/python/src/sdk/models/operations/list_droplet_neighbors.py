from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListDropletNeighborsPathParams:
    droplet_id: int = field(default=None, metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDropletNeighborsRequest:
    path_params: ListDropletNeighborsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ListDropletNeighbors200ApplicationJSON:
    droplets: Optional[List[shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplets' }})
    

@dataclass_json
@dataclass
class ListDropletNeighbors401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListDropletNeighborsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_droplet_neighbors_200_application_json_object: Optional[ListDropletNeighbors200ApplicationJSON] = field(default=None)
    list_droplet_neighbors_401_application_json_object: Optional[ListDropletNeighbors401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
