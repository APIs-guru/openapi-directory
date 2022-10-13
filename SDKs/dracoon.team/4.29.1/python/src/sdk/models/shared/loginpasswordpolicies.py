from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import characterrules
from . import passwordexpiration
from . import userinfo
from . import userlockout


@dataclass_json
@dataclass
class LoginPasswordPolicies:
    character_rules: characterrules.CharacterRules = field(default=None, metadata={'dataclasses_json': { 'field_name': 'characterRules' }})
    min_length: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLength' }})
    number_of_archived_passwords: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfArchivedPasswords' }})
    password_expiration: passwordexpiration.PasswordExpiration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordExpiration' }})
    reject_dictionary_words: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectDictionaryWords' }})
    reject_keyboard_patterns: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectKeyboardPatterns' }})
    reject_user_info: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectUserInfo' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: userinfo.UserInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    user_lockout: userlockout.UserLockout = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLockout' }})
    
