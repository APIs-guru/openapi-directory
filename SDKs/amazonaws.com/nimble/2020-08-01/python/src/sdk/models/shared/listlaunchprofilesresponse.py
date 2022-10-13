from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import launchprofile


@dataclass_json
@dataclass
class ListLaunchProfilesResponse:
    launch_profiles: Optional[List[launchprofile.LaunchProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfiles' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
