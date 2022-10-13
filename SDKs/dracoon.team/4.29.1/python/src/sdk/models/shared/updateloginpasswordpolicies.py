from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import characterrules
from . import passwordexpiration
from . import userlockout


@dataclass_json
@dataclass
class UpdateLoginPasswordPolicies:
    character_rules: Optional[characterrules.CharacterRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'characterRules' }})
    enforce_login_password_change: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforceLoginPasswordChange' }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLength' }})
    number_of_archived_passwords: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfArchivedPasswords' }})
    password_expiration: Optional[passwordexpiration.PasswordExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordExpiration' }})
    reject_dictionary_words: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectDictionaryWords' }})
    reject_keyboard_patterns: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectKeyboardPatterns' }})
    reject_user_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectUserInfo' }})
    user_lockout: Optional[userlockout.UserLockout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLockout' }})
    
