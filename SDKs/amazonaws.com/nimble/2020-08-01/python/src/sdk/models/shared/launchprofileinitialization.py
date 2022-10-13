from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import launchprofileinitializationactivedirectory
from . import launchprofileplatform_enum
from . import launchprofileinitializationscript
from . import launchprofileinitializationscript


@dataclass_json
@dataclass
class LaunchProfileInitialization:
    active_directory: Optional[launchprofileinitializationactivedirectory.LaunchProfileInitializationActiveDirectory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDirectory' }})
    ec2_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2SecurityGroupIds' }})
    launch_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfileId' }})
    launch_profile_protocol_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfileProtocolVersion' }})
    launch_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchPurpose' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform: Optional[launchprofileplatform_enum.LaunchProfilePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    system_initialization_scripts: Optional[List[launchprofileinitializationscript.LaunchProfileInitializationScript]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemInitializationScripts' }})
    user_initialization_scripts: Optional[List[launchprofileinitializationscript.LaunchProfileInitializationScript]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInitializationScripts' }})
    
