from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetRegexPatternSetRequest:
    regex_pattern_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexPatternSetId' }})
    
