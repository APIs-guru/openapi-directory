from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListByteMatchSetsResponse:
    byte_match_sets: Optional[List[ByteMatchSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ByteMatchSets') }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
