from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import endpointitemresponse
from . import eventitemresponse


@dataclass_json
@dataclass
class ItemResponse:
    endpoint_item_response: Optional[endpointitemresponse.EndpointItemResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointItemResponse' }})
    events_item_response: Optional[dict[str, eventitemresponse.EventItemResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventsItemResponse' }})
    
