from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import regexmatchsetupdate


@dataclass_json
@dataclass
class UpdateRegexMatchSetRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    regex_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexMatchSetId' }})
    updates: List[regexmatchsetupdate.RegexMatchSetUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    
