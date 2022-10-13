from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class ControlPanel:
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterArn' }})
    control_panel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlPanelArn' }})
    default_control_panel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultControlPanel' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    routing_control_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingControlCount' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
