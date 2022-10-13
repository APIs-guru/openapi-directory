from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ListAllDropletNeighborsIds200ApplicationJSON:
    neighbor_ids: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'neighbor_ids' }})
    

@dataclass_json
@dataclass
class ListAllDropletNeighborsIds401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListAllDropletNeighborsIdsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_all_droplet_neighbors_ids_200_application_json_object: Optional[ListAllDropletNeighborsIds200ApplicationJSON] = field(default=None)
    list_all_droplet_neighbors_ids_401_application_json_object: Optional[ListAllDropletNeighborsIds401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
