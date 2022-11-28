from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentsResponse:
    r"""SegmentsResponse
    Provides information about all the segments that are associated with an application.
    """
    
    item: List[SegmentResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
