from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListBonusPaymentsRequest:
    assignment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentId' }})
    hit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
