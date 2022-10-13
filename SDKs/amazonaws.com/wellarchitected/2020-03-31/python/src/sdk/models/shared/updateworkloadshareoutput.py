from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workloadshare


@dataclass_json
@dataclass
class UpdateWorkloadShareOutput:
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    workload_share: Optional[workloadshare.WorkloadShare] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadShare' }})
    
