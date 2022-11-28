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
class UpdateEncryptionPasswordPolicies:
    r"""UpdateEncryptionPasswordPolicies
    Request model for updating encryption password policies
    """
    
    character_rules: Optional[CharacterRules] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterRules') }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLength') }})
    reject_keyboard_patterns: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectKeyboardPatterns') }})
    reject_user_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectUserInfo') }})
    
