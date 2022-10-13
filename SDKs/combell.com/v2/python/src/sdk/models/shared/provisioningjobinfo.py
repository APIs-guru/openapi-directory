from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import completionestimation
from . import provisioningjobstatus_enum


@dataclass_json
@dataclass
class ProvisioningJobInfo:
    completion: Optional[completionestimation.CompletionEstimation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completion' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[provisioningjobstatus_enum.ProvisioningJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
