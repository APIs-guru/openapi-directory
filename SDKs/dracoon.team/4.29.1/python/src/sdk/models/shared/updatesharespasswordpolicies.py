from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import characterrules


@dataclass_json
@dataclass
class UpdateSharesPasswordPolicies:
    character_rules: Optional[characterrules.CharacterRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'characterRules' }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLength' }})
    reject_dictionary_words: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectDictionaryWords' }})
    reject_keyboard_patterns: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectKeyboardPatterns' }})
    reject_user_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectUserInfo' }})
    
