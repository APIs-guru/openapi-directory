from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateAdditionalAssignmentsForHitRequest:
    hit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITId') }})
    number_of_additional_assignments: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfAdditionalAssignments') }})
    unique_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueRequestToken') }})
    
