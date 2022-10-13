from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import routingcontrolstate_enum


@dataclass_json
@dataclass
class UpdateRoutingControlStateRequest:
    routing_control_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingControlArn' }})
    routing_control_state: routingcontrolstate_enum.RoutingControlStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingControlState' }})
    
