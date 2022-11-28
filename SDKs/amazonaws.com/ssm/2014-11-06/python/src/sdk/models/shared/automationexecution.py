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
class AutomationExecution:
    r"""AutomationExecution
    Detailed information about the current state of an individual Automation execution.
    """
    
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationId') }})
    automation_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationExecutionId') }})
    automation_execution_status: Optional[AutomationExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationExecutionStatus') }})
    automation_subtype: Optional[AutomationSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationSubtype') }})
    change_request_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeRequestName') }})
    current_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentAction') }})
    current_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentStepName') }})
    document_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentName') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    executed_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutedBy') }})
    execution_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrency') }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxErrors') }})
    mode: Optional[ExecutionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    ops_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsItemId') }})
    outputs: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    parent_automation_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentAutomationExecutionId') }})
    progress_counters: Optional[ProgressCounters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressCounters') }})
    resolved_targets: Optional[ResolvedTargets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolvedTargets') }})
    runbooks: Optional[List[Runbook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Runbooks') }})
    scheduled_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    step_executions: Optional[List[StepExecution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepExecutions') }})
    step_executions_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepExecutionsTruncated') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    target_locations: Optional[List[TargetLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetLocations') }})
    target_maps: Optional[List[dict[str, List[str]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetMaps') }})
    target_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetParameterName') }})
    targets: Optional[List[Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    
