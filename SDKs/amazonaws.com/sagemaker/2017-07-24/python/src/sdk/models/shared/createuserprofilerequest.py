from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUserProfileRequest:
    domain_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainId') }})
    user_profile_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserProfileName') }})
    single_sign_on_user_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SingleSignOnUserIdentifier') }})
    single_sign_on_user_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SingleSignOnUserValue') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    user_settings: Optional[UserSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserSettings') }})
    
