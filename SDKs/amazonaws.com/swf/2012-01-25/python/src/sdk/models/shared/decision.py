from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import canceltimerdecisionattributes
from . import cancelworkflowexecutiondecisionattributes
from . import completeworkflowexecutiondecisionattributes
from . import continueasnewworkflowexecutiondecisionattributes
from . import decisiontype_enum
from . import failworkflowexecutiondecisionattributes
from . import recordmarkerdecisionattributes
from . import requestcancelactivitytaskdecisionattributes
from . import requestcancelexternalworkflowexecutiondecisionattributes
from . import scheduleactivitytaskdecisionattributes
from . import schedulelambdafunctiondecisionattributes
from . import signalexternalworkflowexecutiondecisionattributes
from . import startchildworkflowexecutiondecisionattributes
from . import starttimerdecisionattributes


@dataclass_json
@dataclass
class Decision:
    cancel_timer_decision_attributes: Optional[canceltimerdecisionattributes.CancelTimerDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelTimerDecisionAttributes' }})
    cancel_workflow_execution_decision_attributes: Optional[cancelworkflowexecutiondecisionattributes.CancelWorkflowExecutionDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelWorkflowExecutionDecisionAttributes' }})
    complete_workflow_execution_decision_attributes: Optional[completeworkflowexecutiondecisionattributes.CompleteWorkflowExecutionDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completeWorkflowExecutionDecisionAttributes' }})
    continue_as_new_workflow_execution_decision_attributes: Optional[continueasnewworkflowexecutiondecisionattributes.ContinueAsNewWorkflowExecutionDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continueAsNewWorkflowExecutionDecisionAttributes' }})
    decision_type: decisiontype_enum.DecisionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionType' }})
    fail_workflow_execution_decision_attributes: Optional[failworkflowexecutiondecisionattributes.FailWorkflowExecutionDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failWorkflowExecutionDecisionAttributes' }})
    record_marker_decision_attributes: Optional[recordmarkerdecisionattributes.RecordMarkerDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordMarkerDecisionAttributes' }})
    request_cancel_activity_task_decision_attributes: Optional[requestcancelactivitytaskdecisionattributes.RequestCancelActivityTaskDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestCancelActivityTaskDecisionAttributes' }})
    request_cancel_external_workflow_execution_decision_attributes: Optional[requestcancelexternalworkflowexecutiondecisionattributes.RequestCancelExternalWorkflowExecutionDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestCancelExternalWorkflowExecutionDecisionAttributes' }})
    schedule_activity_task_decision_attributes: Optional[scheduleactivitytaskdecisionattributes.ScheduleActivityTaskDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleActivityTaskDecisionAttributes' }})
    schedule_lambda_function_decision_attributes: Optional[schedulelambdafunctiondecisionattributes.ScheduleLambdaFunctionDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleLambdaFunctionDecisionAttributes' }})
    signal_external_workflow_execution_decision_attributes: Optional[signalexternalworkflowexecutiondecisionattributes.SignalExternalWorkflowExecutionDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signalExternalWorkflowExecutionDecisionAttributes' }})
    start_child_workflow_execution_decision_attributes: Optional[startchildworkflowexecutiondecisionattributes.StartChildWorkflowExecutionDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startChildWorkflowExecutionDecisionAttributes' }})
    start_timer_decision_attributes: Optional[starttimerdecisionattributes.StartTimerDecisionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimerDecisionAttributes' }})
    
