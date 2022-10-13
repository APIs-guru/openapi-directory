from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import routingcontrol


@dataclass_json
@dataclass
class UpdateRoutingControlResponse:
    routing_control: Optional[routingcontrol.RoutingControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingControl' }})
    
