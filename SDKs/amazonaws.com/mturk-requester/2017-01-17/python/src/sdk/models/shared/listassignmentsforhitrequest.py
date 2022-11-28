from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAssignmentsForHitRequest:
    hit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITId') }})
    assignment_statuses: Optional[List[AssignmentStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentStatuses') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
