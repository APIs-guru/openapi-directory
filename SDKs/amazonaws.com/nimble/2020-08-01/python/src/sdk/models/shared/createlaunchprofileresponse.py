from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import launchprofile


@dataclass_json
@dataclass
class CreateLaunchProfileResponse:
    launch_profile: Optional[launchprofile.LaunchProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfile' }})
    
