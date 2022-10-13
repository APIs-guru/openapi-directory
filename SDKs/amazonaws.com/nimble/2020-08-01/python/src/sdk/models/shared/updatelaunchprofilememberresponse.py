from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import launchprofilemembership


@dataclass_json
@dataclass
class UpdateLaunchProfileMemberResponse:
    member: Optional[launchprofilemembership.LaunchProfileMembership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    
