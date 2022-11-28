from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StepExecution:
    r"""StepExecution
    Detailed information about an the execution state of an Automation step.
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    execution_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_details: Optional[FailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDetails') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    inputs: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inputs') }})
    is_critical: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsCritical') }})
    is_end: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsEnd') }})
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAttempts') }})
    next_step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextStep') }})
    on_failure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnFailure') }})
    outputs: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    overridden_parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverriddenParameters') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Response') }})
    response_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseCode') }})
    step_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepExecutionId') }})
    step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepName') }})
    step_status: Optional[AutomationExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepStatus') }})
    target_location: Optional[TargetLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetLocation') }})
    targets: Optional[List[Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutSeconds') }})
    valid_next_steps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidNextSteps') }})
    
