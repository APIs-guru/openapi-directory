from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAppLaunchConfigurationRequest:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    auto_launch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoLaunch') }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleName') }})
    server_group_launch_configurations: Optional[List[ServerGroupLaunchConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupLaunchConfigurations') }})
    
