from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateAdditionalAssignmentsForHitRequest:
    hit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITId' }})
    number_of_additional_assignments: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfAdditionalAssignments' }})
    unique_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UniqueRequestToken' }})
    
