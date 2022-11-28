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
class AutomationExecutionMetadata:
    r"""AutomationExecutionMetadata
    Details about a specific Automation execution.
    """
    
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationId') }})
    automation_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationExecutionId') }})
    automation_execution_status: Optional[AutomationExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationExecutionStatus') }})
    automation_subtype: Optional[AutomationSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationSubtype') }})
    automation_type: Optional[AutomationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationType') }})
    change_request_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeRequestName') }})
    current_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentAction') }})
    current_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentStepName') }})
    document_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentName') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    executed_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutedBy') }})
    execution_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    log_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogFile') }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrency') }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxErrors') }})
    mode: Optional[ExecutionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    ops_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsItemId') }})
    outputs: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    parent_automation_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentAutomationExecutionId') }})
    resolved_targets: Optional[ResolvedTargets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolvedTargets') }})
    runbooks: Optional[List[Runbook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Runbooks') }})
    scheduled_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    target_maps: Optional[List[dict[str, List[str]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetMaps') }})
    target_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetParameterName') }})
    targets: Optional[List[Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    
