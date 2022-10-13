from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import assignmentstatus_enum


@dataclass_json
@dataclass
class ListAssignmentsForHitRequest:
    assignment_statuses: Optional[List[assignmentstatus_enum.AssignmentStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentStatuses' }})
    hit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
