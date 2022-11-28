from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SegmentSequenceStepMatchTypeEnum(str, Enum):
    UNSPECIFIED_MATCH_TYPE = "UNSPECIFIED_MATCH_TYPE"
    PRECEDES = "PRECEDES"
    IMMEDIATELY_PRECEDES = "IMMEDIATELY_PRECEDES"


@dataclass_json
@dataclass
class SegmentSequenceStep:
    r"""SegmentSequenceStep
    A segment sequence definition.
    """
    
    match_type: Optional[SegmentSequenceStepMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    or_filters_for_segment: Optional[List[OrFiltersForSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orFiltersForSegment') }})
    
