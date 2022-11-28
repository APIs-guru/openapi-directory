from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Segment:
    r"""Segment
    The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city.
    """
    
    dynamic_segment: Optional[DynamicSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicSegment') }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentId') }})
    
