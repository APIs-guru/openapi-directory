from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import regexmatchset


@dataclass_json
@dataclass
class GetRegexMatchSetResponse:
    regex_match_set: Optional[regexmatchset.RegexMatchSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexMatchSet' }})
    
