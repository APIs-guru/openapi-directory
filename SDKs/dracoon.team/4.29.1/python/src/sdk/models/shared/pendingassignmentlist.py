from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PendingAssignmentList:
    r"""PendingAssignmentList
    List of pending assignments
    """
    
    items: List[PendingAssignmentData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
