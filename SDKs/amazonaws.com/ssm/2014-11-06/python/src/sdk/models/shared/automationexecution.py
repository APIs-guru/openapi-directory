from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import automationexecutionstatus_enum
from . import automationsubtype_enum
from . import executionmode_enum
from . import progresscounters
from . import resolvedtargets
from . import runbook
from . import stepexecution
from . import targetlocation
from . import target


@dataclass_json
@dataclass
class AutomationExecution:
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    automation_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationExecutionId' }})
    automation_execution_status: Optional[automationexecutionstatus_enum.AutomationExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationExecutionStatus' }})
    automation_subtype: Optional[automationsubtype_enum.AutomationSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationSubtype' }})
    change_request_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeRequestName' }})
    current_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentAction' }})
    current_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentStepName' }})
    document_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentName' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    executed_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutedBy' }})
    execution_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureMessage' }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxErrors' }})
    mode: Optional[executionmode_enum.ExecutionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    ops_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemId' }})
    outputs: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outputs' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    parent_automation_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentAutomationExecutionId' }})
    progress_counters: Optional[progresscounters.ProgressCounters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressCounters' }})
    resolved_targets: Optional[resolvedtargets.ResolvedTargets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolvedTargets' }})
    runbooks: Optional[List[runbook.Runbook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Runbooks' }})
    scheduled_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    step_executions: Optional[List[stepexecution.StepExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepExecutions' }})
    step_executions_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepExecutionsTruncated' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    target_locations: Optional[List[targetlocation.TargetLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLocations' }})
    target_maps: Optional[List[dict[str, List[str]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetMaps' }})
    target_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetParameterName' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
