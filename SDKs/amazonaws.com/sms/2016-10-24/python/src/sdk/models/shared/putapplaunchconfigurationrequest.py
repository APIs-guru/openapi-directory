from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servergrouplaunchconfiguration


@dataclass_json
@dataclass
class PutAppLaunchConfigurationRequest:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    auto_launch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoLaunch' }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleName' }})
    server_group_launch_configurations: Optional[List[servergrouplaunchconfiguration.ServerGroupLaunchConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverGroupLaunchConfigurations' }})
    
