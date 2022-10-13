from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class RoutingControl:
    control_panel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlPanelArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    routing_control_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingControlArn' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
