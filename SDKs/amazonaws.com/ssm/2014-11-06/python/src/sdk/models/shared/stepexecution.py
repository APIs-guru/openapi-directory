from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import failuredetails
from . import automationexecutionstatus_enum
from . import targetlocation
from . import target


@dataclass_json
@dataclass
class StepExecution:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    execution_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_details: Optional[failuredetails.FailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDetails' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureMessage' }})
    inputs: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inputs' }})
    is_critical: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsCritical' }})
    is_end: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsEnd' }})
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAttempts' }})
    next_step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextStep' }})
    on_failure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnFailure' }})
    outputs: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outputs' }})
    overridden_parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverriddenParameters' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Response' }})
    response_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseCode' }})
    step_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepExecutionId' }})
    step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepName' }})
    step_status: Optional[automationexecutionstatus_enum.AutomationExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepStatus' }})
    target_location: Optional[targetlocation.TargetLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLocation' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutSeconds' }})
    valid_next_steps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidNextSteps' }})
    
