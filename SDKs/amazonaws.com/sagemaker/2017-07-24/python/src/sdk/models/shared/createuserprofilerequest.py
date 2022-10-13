from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import usersettings


@dataclass_json
@dataclass
class CreateUserProfileRequest:
    domain_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    single_sign_on_user_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleSignOnUserIdentifier' }})
    single_sign_on_user_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleSignOnUserValue' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileName' }})
    user_settings: Optional[usersettings.UserSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserSettings' }})
    
