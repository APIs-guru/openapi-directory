from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import anomalydetectiontaskstatus_enum


@dataclass_json
@dataclass
class ExecutionStatus:
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    status: Optional[anomalydetectiontaskstatus_enum.AnomalyDetectionTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    
