from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PendingAssignmentsRequest:
    r"""PendingAssignmentsRequest
    Request model for handling pending assignments
    """
    
    items: List[PendingAssignment] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
