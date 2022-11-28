from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateLoginPasswordPolicies:
    r"""UpdateLoginPasswordPolicies
    Request model for updating login password policies
    """
    
    character_rules: Optional[CharacterRules] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterRules') }})
    enforce_login_password_change: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceLoginPasswordChange') }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLength') }})
    number_of_archived_passwords: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfArchivedPasswords') }})
    password_expiration: Optional[PasswordExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordExpiration') }})
    reject_dictionary_words: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectDictionaryWords') }})
    reject_keyboard_patterns: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectKeyboardPatterns') }})
    reject_user_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectUserInfo') }})
    user_lockout: Optional[UserLockout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLockout') }})
    
