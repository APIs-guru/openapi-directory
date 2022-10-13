from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import usersettings


@dataclass_json
@dataclass
class UpdateUserProfileRequest:
    domain_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    user_profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileName' }})
    user_settings: Optional[usersettings.UserSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserSettings' }})
    
