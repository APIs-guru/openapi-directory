from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import regexpatternsetupdate


@dataclass_json
@dataclass
class UpdateRegexPatternSetRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    regex_pattern_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexPatternSetId' }})
    updates: List[regexpatternsetupdate.RegexPatternSetUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    
