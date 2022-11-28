from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Api2ModelsBigOvenUser:
    r"""Api2ModelsBigOvenUser
    An API2 wrapper object for a user
    """
    
    accounting: Optional[Api2ModelsAccounting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accounting') }, 'form': { 'field_name': 'Accounting' }})
    bo_auth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BOAuthToken') }, 'form': { 'field_name': 'BOAuthToken' }})
    last_change_log_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastChangeLogID') }, 'form': { 'field_name': 'LastChangeLogID' }})
    personal: Optional[Api2ModelsPersonal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Personal') }, 'form': { 'field_name': 'Personal' }})
    preferences: Optional[Api2ModelsPreference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Preferences') }, 'form': { 'field_name': 'Preferences' }})
    profile: Optional[Api2ModelsProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Profile') }, 'form': { 'field_name': 'Profile' }})
    
