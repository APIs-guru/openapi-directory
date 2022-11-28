from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSizeConstraintSetsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    size_constraint_sets: Optional[List[SizeConstraintSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeConstraintSets') }})
    
