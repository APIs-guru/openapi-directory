from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRegexMatchSetsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    regex_match_sets: Optional[List[RegexMatchSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexMatchSets') }})
    
