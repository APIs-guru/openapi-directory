from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SimpleSegment:
    r"""SimpleSegment
    A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.
    """
    
    or_filters_for_segment: Optional[List[OrFiltersForSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orFiltersForSegment') }})
    
