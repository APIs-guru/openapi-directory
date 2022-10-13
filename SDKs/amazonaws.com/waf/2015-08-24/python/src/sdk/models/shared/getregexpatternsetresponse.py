from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import regexpatternset


@dataclass_json
@dataclass
class GetRegexPatternSetResponse:
    regex_pattern_set: Optional[regexpatternset.RegexPatternSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexPatternSet' }})
    
