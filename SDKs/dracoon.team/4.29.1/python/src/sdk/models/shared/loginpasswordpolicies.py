from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoginPasswordPolicies:
    r"""LoginPasswordPolicies
    Login password policies
    """
    
    character_rules: CharacterRules = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterRules') }})
    min_length: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLength') }})
    number_of_archived_passwords: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfArchivedPasswords') }})
    password_expiration: PasswordExpiration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordExpiration') }})
    reject_dictionary_words: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectDictionaryWords') }})
    reject_keyboard_patterns: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectKeyboardPatterns') }})
    reject_user_info: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectUserInfo') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: UserInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    user_lockout: UserLockout = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLockout') }})
    
