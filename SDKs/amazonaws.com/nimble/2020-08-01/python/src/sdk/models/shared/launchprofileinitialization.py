from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LaunchProfileInitialization:
    active_directory: Optional[LaunchProfileInitializationActiveDirectory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDirectory') }})
    ec2_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2SecurityGroupIds') }})
    launch_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfileId') }})
    launch_profile_protocol_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfileProtocolVersion') }})
    launch_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchPurpose') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[LaunchProfilePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    system_initialization_scripts: Optional[List[LaunchProfileInitializationScript]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemInitializationScripts') }})
    user_initialization_scripts: Optional[List[LaunchProfileInitializationScript]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInitializationScripts') }})
    
