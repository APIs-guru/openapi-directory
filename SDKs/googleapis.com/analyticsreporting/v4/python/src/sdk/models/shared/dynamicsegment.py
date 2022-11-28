from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamicSegment:
    r"""DynamicSegment
    Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    session_segment: Optional[SegmentDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionSegment') }})
    user_segment: Optional[SegmentDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSegment') }})
    
