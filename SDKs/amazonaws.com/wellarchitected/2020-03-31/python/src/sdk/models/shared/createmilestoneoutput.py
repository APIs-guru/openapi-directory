from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateMilestoneOutput:
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MilestoneNumber' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    
