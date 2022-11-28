from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ControlPanel:
    r"""ControlPanel
    A control panel represents a group of routing controls that can be changed together in a single transaction.
    """
    
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterArn') }})
    control_panel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlPanelArn') }})
    default_control_panel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultControlPanel') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    routing_control_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingControlCount') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
