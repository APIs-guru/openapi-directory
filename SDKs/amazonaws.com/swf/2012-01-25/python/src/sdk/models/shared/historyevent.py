from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import activitytaskcancelrequestedeventattributes
from . import activitytaskcanceledeventattributes
from . import activitytaskcompletedeventattributes
from . import activitytaskfailedeventattributes
from . import activitytaskscheduledeventattributes
from . import activitytaskstartedeventattributes
from . import activitytasktimedouteventattributes
from . import canceltimerfailedeventattributes
from . import cancelworkflowexecutionfailedeventattributes
from . import childworkflowexecutioncanceledeventattributes
from . import childworkflowexecutioncompletedeventattributes
from . import childworkflowexecutionfailedeventattributes
from . import childworkflowexecutionstartedeventattributes
from . import childworkflowexecutionterminatedeventattributes
from . import childworkflowexecutiontimedouteventattributes
from . import completeworkflowexecutionfailedeventattributes
from . import continueasnewworkflowexecutionfailedeventattributes
from . import decisiontaskcompletedeventattributes
from . import decisiontaskscheduledeventattributes
from . import decisiontaskstartedeventattributes
from . import decisiontasktimedouteventattributes
from . import eventtype_enum
from . import externalworkflowexecutioncancelrequestedeventattributes
from . import externalworkflowexecutionsignaledeventattributes
from . import failworkflowexecutionfailedeventattributes
from . import lambdafunctioncompletedeventattributes
from . import lambdafunctionfailedeventattributes
from . import lambdafunctionscheduledeventattributes
from . import lambdafunctionstartedeventattributes
from . import lambdafunctiontimedouteventattributes
from . import markerrecordedeventattributes
from . import recordmarkerfailedeventattributes
from . import requestcancelactivitytaskfailedeventattributes
from . import requestcancelexternalworkflowexecutionfailedeventattributes
from . import requestcancelexternalworkflowexecutioninitiatedeventattributes
from . import scheduleactivitytaskfailedeventattributes
from . import schedulelambdafunctionfailedeventattributes
from . import signalexternalworkflowexecutionfailedeventattributes
from . import signalexternalworkflowexecutioninitiatedeventattributes
from . import startchildworkflowexecutionfailedeventattributes
from . import startchildworkflowexecutioninitiatedeventattributes
from . import startlambdafunctionfailedeventattributes
from . import starttimerfailedeventattributes
from . import timercanceledeventattributes
from . import timerfiredeventattributes
from . import timerstartedeventattributes
from . import workflowexecutioncancelrequestedeventattributes
from . import workflowexecutioncanceledeventattributes
from . import workflowexecutioncompletedeventattributes
from . import workflowexecutioncontinuedasneweventattributes
from . import workflowexecutionfailedeventattributes
from . import workflowexecutionsignaledeventattributes
from . import workflowexecutionstartedeventattributes
from . import workflowexecutionterminatedeventattributes
from . import workflowexecutiontimedouteventattributes


@dataclass_json
@dataclass
class HistoryEvent:
    activity_task_cancel_requested_event_attributes: Optional[activitytaskcancelrequestedeventattributes.ActivityTaskCancelRequestedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityTaskCancelRequestedEventAttributes' }})
    activity_task_canceled_event_attributes: Optional[activitytaskcanceledeventattributes.ActivityTaskCanceledEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityTaskCanceledEventAttributes' }})
    activity_task_completed_event_attributes: Optional[activitytaskcompletedeventattributes.ActivityTaskCompletedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityTaskCompletedEventAttributes' }})
    activity_task_failed_event_attributes: Optional[activitytaskfailedeventattributes.ActivityTaskFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityTaskFailedEventAttributes' }})
    activity_task_scheduled_event_attributes: Optional[activitytaskscheduledeventattributes.ActivityTaskScheduledEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityTaskScheduledEventAttributes' }})
    activity_task_started_event_attributes: Optional[activitytaskstartedeventattributes.ActivityTaskStartedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityTaskStartedEventAttributes' }})
    activity_task_timed_out_event_attributes: Optional[activitytasktimedouteventattributes.ActivityTaskTimedOutEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityTaskTimedOutEventAttributes' }})
    cancel_timer_failed_event_attributes: Optional[canceltimerfailedeventattributes.CancelTimerFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelTimerFailedEventAttributes' }})
    cancel_workflow_execution_failed_event_attributes: Optional[cancelworkflowexecutionfailedeventattributes.CancelWorkflowExecutionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelWorkflowExecutionFailedEventAttributes' }})
    child_workflow_execution_canceled_event_attributes: Optional[childworkflowexecutioncanceledeventattributes.ChildWorkflowExecutionCanceledEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childWorkflowExecutionCanceledEventAttributes' }})
    child_workflow_execution_completed_event_attributes: Optional[childworkflowexecutioncompletedeventattributes.ChildWorkflowExecutionCompletedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childWorkflowExecutionCompletedEventAttributes' }})
    child_workflow_execution_failed_event_attributes: Optional[childworkflowexecutionfailedeventattributes.ChildWorkflowExecutionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childWorkflowExecutionFailedEventAttributes' }})
    child_workflow_execution_started_event_attributes: Optional[childworkflowexecutionstartedeventattributes.ChildWorkflowExecutionStartedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childWorkflowExecutionStartedEventAttributes' }})
    child_workflow_execution_terminated_event_attributes: Optional[childworkflowexecutionterminatedeventattributes.ChildWorkflowExecutionTerminatedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childWorkflowExecutionTerminatedEventAttributes' }})
    child_workflow_execution_timed_out_event_attributes: Optional[childworkflowexecutiontimedouteventattributes.ChildWorkflowExecutionTimedOutEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childWorkflowExecutionTimedOutEventAttributes' }})
    complete_workflow_execution_failed_event_attributes: Optional[completeworkflowexecutionfailedeventattributes.CompleteWorkflowExecutionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completeWorkflowExecutionFailedEventAttributes' }})
    continue_as_new_workflow_execution_failed_event_attributes: Optional[continueasnewworkflowexecutionfailedeventattributes.ContinueAsNewWorkflowExecutionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continueAsNewWorkflowExecutionFailedEventAttributes' }})
    decision_task_completed_event_attributes: Optional[decisiontaskcompletedeventattributes.DecisionTaskCompletedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventAttributes' }})
    decision_task_scheduled_event_attributes: Optional[decisiontaskscheduledeventattributes.DecisionTaskScheduledEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskScheduledEventAttributes' }})
    decision_task_started_event_attributes: Optional[decisiontaskstartedeventattributes.DecisionTaskStartedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskStartedEventAttributes' }})
    decision_task_timed_out_event_attributes: Optional[decisiontasktimedouteventattributes.DecisionTaskTimedOutEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskTimedOutEventAttributes' }})
    event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    event_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: eventtype_enum.EventTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    external_workflow_execution_cancel_requested_event_attributes: Optional[externalworkflowexecutioncancelrequestedeventattributes.ExternalWorkflowExecutionCancelRequestedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalWorkflowExecutionCancelRequestedEventAttributes' }})
    external_workflow_execution_signaled_event_attributes: Optional[externalworkflowexecutionsignaledeventattributes.ExternalWorkflowExecutionSignaledEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalWorkflowExecutionSignaledEventAttributes' }})
    fail_workflow_execution_failed_event_attributes: Optional[failworkflowexecutionfailedeventattributes.FailWorkflowExecutionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failWorkflowExecutionFailedEventAttributes' }})
    lambda_function_completed_event_attributes: Optional[lambdafunctioncompletedeventattributes.LambdaFunctionCompletedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionCompletedEventAttributes' }})
    lambda_function_failed_event_attributes: Optional[lambdafunctionfailedeventattributes.LambdaFunctionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionFailedEventAttributes' }})
    lambda_function_scheduled_event_attributes: Optional[lambdafunctionscheduledeventattributes.LambdaFunctionScheduledEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionScheduledEventAttributes' }})
    lambda_function_started_event_attributes: Optional[lambdafunctionstartedeventattributes.LambdaFunctionStartedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionStartedEventAttributes' }})
    lambda_function_timed_out_event_attributes: Optional[lambdafunctiontimedouteventattributes.LambdaFunctionTimedOutEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionTimedOutEventAttributes' }})
    marker_recorded_event_attributes: Optional[markerrecordedeventattributes.MarkerRecordedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markerRecordedEventAttributes' }})
    record_marker_failed_event_attributes: Optional[recordmarkerfailedeventattributes.RecordMarkerFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordMarkerFailedEventAttributes' }})
    request_cancel_activity_task_failed_event_attributes: Optional[requestcancelactivitytaskfailedeventattributes.RequestCancelActivityTaskFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestCancelActivityTaskFailedEventAttributes' }})
    request_cancel_external_workflow_execution_failed_event_attributes: Optional[requestcancelexternalworkflowexecutionfailedeventattributes.RequestCancelExternalWorkflowExecutionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestCancelExternalWorkflowExecutionFailedEventAttributes' }})
    request_cancel_external_workflow_execution_initiated_event_attributes: Optional[requestcancelexternalworkflowexecutioninitiatedeventattributes.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestCancelExternalWorkflowExecutionInitiatedEventAttributes' }})
    schedule_activity_task_failed_event_attributes: Optional[scheduleactivitytaskfailedeventattributes.ScheduleActivityTaskFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleActivityTaskFailedEventAttributes' }})
    schedule_lambda_function_failed_event_attributes: Optional[schedulelambdafunctionfailedeventattributes.ScheduleLambdaFunctionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleLambdaFunctionFailedEventAttributes' }})
    signal_external_workflow_execution_failed_event_attributes: Optional[signalexternalworkflowexecutionfailedeventattributes.SignalExternalWorkflowExecutionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signalExternalWorkflowExecutionFailedEventAttributes' }})
    signal_external_workflow_execution_initiated_event_attributes: Optional[signalexternalworkflowexecutioninitiatedeventattributes.SignalExternalWorkflowExecutionInitiatedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signalExternalWorkflowExecutionInitiatedEventAttributes' }})
    start_child_workflow_execution_failed_event_attributes: Optional[startchildworkflowexecutionfailedeventattributes.StartChildWorkflowExecutionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startChildWorkflowExecutionFailedEventAttributes' }})
    start_child_workflow_execution_initiated_event_attributes: Optional[startchildworkflowexecutioninitiatedeventattributes.StartChildWorkflowExecutionInitiatedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startChildWorkflowExecutionInitiatedEventAttributes' }})
    start_lambda_function_failed_event_attributes: Optional[startlambdafunctionfailedeventattributes.StartLambdaFunctionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startLambdaFunctionFailedEventAttributes' }})
    start_timer_failed_event_attributes: Optional[starttimerfailedeventattributes.StartTimerFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimerFailedEventAttributes' }})
    timer_canceled_event_attributes: Optional[timercanceledeventattributes.TimerCanceledEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timerCanceledEventAttributes' }})
    timer_fired_event_attributes: Optional[timerfiredeventattributes.TimerFiredEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timerFiredEventAttributes' }})
    timer_started_event_attributes: Optional[timerstartedeventattributes.TimerStartedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timerStartedEventAttributes' }})
    workflow_execution_cancel_requested_event_attributes: Optional[workflowexecutioncancelrequestedeventattributes.WorkflowExecutionCancelRequestedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionCancelRequestedEventAttributes' }})
    workflow_execution_canceled_event_attributes: Optional[workflowexecutioncanceledeventattributes.WorkflowExecutionCanceledEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionCanceledEventAttributes' }})
    workflow_execution_completed_event_attributes: Optional[workflowexecutioncompletedeventattributes.WorkflowExecutionCompletedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionCompletedEventAttributes' }})
    workflow_execution_continued_as_new_event_attributes: Optional[workflowexecutioncontinuedasneweventattributes.WorkflowExecutionContinuedAsNewEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionContinuedAsNewEventAttributes' }})
    workflow_execution_failed_event_attributes: Optional[workflowexecutionfailedeventattributes.WorkflowExecutionFailedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionFailedEventAttributes' }})
    workflow_execution_signaled_event_attributes: Optional[workflowexecutionsignaledeventattributes.WorkflowExecutionSignaledEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionSignaledEventAttributes' }})
    workflow_execution_started_event_attributes: Optional[workflowexecutionstartedeventattributes.WorkflowExecutionStartedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionStartedEventAttributes' }})
    workflow_execution_terminated_event_attributes: Optional[workflowexecutionterminatedeventattributes.WorkflowExecutionTerminatedEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionTerminatedEventAttributes' }})
    workflow_execution_timed_out_event_attributes: Optional[workflowexecutiontimedouteventattributes.WorkflowExecutionTimedOutEventAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionTimedOutEventAttributes' }})
    
