from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regexmatchtuple


@dataclass_json
@dataclass
class RegexMatchSet:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    regex_match_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexMatchSetId' }})
    regex_match_tuples: Optional[List[regexmatchtuple.RegexMatchTuple]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexMatchTuples' }})
    
