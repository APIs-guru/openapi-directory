from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import milestone


@dataclass_json
@dataclass
class GetMilestoneOutput:
    milestone: Optional[milestone.Milestone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Milestone' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    
