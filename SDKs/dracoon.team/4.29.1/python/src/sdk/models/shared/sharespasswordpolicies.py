from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import characterrules
from . import userinfo


@dataclass_json
@dataclass
class SharesPasswordPolicies:
    character_rules: Optional[characterrules.CharacterRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'characterRules' }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLength' }})
    reject_dictionary_words: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectDictionaryWords' }})
    reject_keyboard_patterns: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectKeyboardPatterns' }})
    reject_user_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectUserInfo' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
