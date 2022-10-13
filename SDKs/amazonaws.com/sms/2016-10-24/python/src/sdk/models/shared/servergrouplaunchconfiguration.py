from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serverlaunchconfiguration


@dataclass_json
@dataclass
class ServerGroupLaunchConfiguration:
    launch_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchOrder' }})
    server_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverGroupId' }})
    server_launch_configurations: Optional[List[serverlaunchconfiguration.ServerLaunchConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverLaunchConfigurations' }})
    
