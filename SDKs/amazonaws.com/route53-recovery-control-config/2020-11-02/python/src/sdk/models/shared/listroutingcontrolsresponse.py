from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routingcontrol


@dataclass_json
@dataclass
class ListRoutingControlsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    routing_controls: Optional[List[routingcontrol.RoutingControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingControls' }})
    
