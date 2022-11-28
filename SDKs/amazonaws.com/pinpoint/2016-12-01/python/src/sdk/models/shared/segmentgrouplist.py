from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentGroupList:
    r"""SegmentGroupList
    Specifies the settings that define the relationships between segment groups for a segment.
    """
    
    groups: Optional[List[SegmentGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    include: Optional[IncludeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Include') }})
    
