from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegexMatchSetSummary:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    regex_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexMatchSetId' }})
    
