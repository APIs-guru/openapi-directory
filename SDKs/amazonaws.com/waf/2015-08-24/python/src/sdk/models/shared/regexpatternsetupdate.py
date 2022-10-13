from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum


@dataclass_json
@dataclass
class RegexPatternSetUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    regex_pattern_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexPatternString' }})
    
