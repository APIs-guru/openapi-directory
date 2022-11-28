from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentDefinition:
    r"""SegmentDefinition
    SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.
    """
    
    segment_filters: Optional[List[SegmentFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentFilters') }})
    
