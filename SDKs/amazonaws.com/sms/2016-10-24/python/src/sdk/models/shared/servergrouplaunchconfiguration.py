from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerGroupLaunchConfiguration:
    r"""ServerGroupLaunchConfiguration
    Launch configuration for a server group.
    """
    
    launch_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchOrder') }})
    server_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupId') }})
    server_launch_configurations: Optional[List[ServerLaunchConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverLaunchConfigurations') }})
    
