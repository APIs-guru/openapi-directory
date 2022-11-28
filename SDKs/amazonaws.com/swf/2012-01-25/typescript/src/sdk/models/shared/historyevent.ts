import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityTaskCancelRequestedEventAttributes } from "./activitytaskcancelrequestedeventattributes";
import { ActivityTaskCanceledEventAttributes } from "./activitytaskcanceledeventattributes";
import { ActivityTaskCompletedEventAttributes } from "./activitytaskcompletedeventattributes";
import { ActivityTaskFailedEventAttributes } from "./activitytaskfailedeventattributes";
import { ActivityTaskScheduledEventAttributes } from "./activitytaskscheduledeventattributes";
import { ActivityTaskStartedEventAttributes } from "./activitytaskstartedeventattributes";
import { ActivityTaskTimedOutEventAttributes } from "./activitytasktimedouteventattributes";
import { CancelTimerFailedEventAttributes } from "./canceltimerfailedeventattributes";
import { CancelWorkflowExecutionFailedEventAttributes } from "./cancelworkflowexecutionfailedeventattributes";
import { ChildWorkflowExecutionCanceledEventAttributes } from "./childworkflowexecutioncanceledeventattributes";
import { ChildWorkflowExecutionCompletedEventAttributes } from "./childworkflowexecutioncompletedeventattributes";
import { ChildWorkflowExecutionFailedEventAttributes } from "./childworkflowexecutionfailedeventattributes";
import { ChildWorkflowExecutionStartedEventAttributes } from "./childworkflowexecutionstartedeventattributes";
import { ChildWorkflowExecutionTerminatedEventAttributes } from "./childworkflowexecutionterminatedeventattributes";
import { ChildWorkflowExecutionTimedOutEventAttributes } from "./childworkflowexecutiontimedouteventattributes";
import { CompleteWorkflowExecutionFailedEventAttributes } from "./completeworkflowexecutionfailedeventattributes";
import { ContinueAsNewWorkflowExecutionFailedEventAttributes } from "./continueasnewworkflowexecutionfailedeventattributes";
import { DecisionTaskCompletedEventAttributes } from "./decisiontaskcompletedeventattributes";
import { DecisionTaskScheduledEventAttributes } from "./decisiontaskscheduledeventattributes";
import { DecisionTaskStartedEventAttributes } from "./decisiontaskstartedeventattributes";
import { DecisionTaskTimedOutEventAttributes } from "./decisiontasktimedouteventattributes";
import { EventTypeEnum } from "./eventtypeenum";
import { ExternalWorkflowExecutionCancelRequestedEventAttributes } from "./externalworkflowexecutioncancelrequestedeventattributes";
import { ExternalWorkflowExecutionSignaledEventAttributes } from "./externalworkflowexecutionsignaledeventattributes";
import { FailWorkflowExecutionFailedEventAttributes } from "./failworkflowexecutionfailedeventattributes";
import { LambdaFunctionCompletedEventAttributes } from "./lambdafunctioncompletedeventattributes";
import { LambdaFunctionFailedEventAttributes } from "./lambdafunctionfailedeventattributes";
import { LambdaFunctionScheduledEventAttributes } from "./lambdafunctionscheduledeventattributes";
import { LambdaFunctionStartedEventAttributes } from "./lambdafunctionstartedeventattributes";
import { LambdaFunctionTimedOutEventAttributes } from "./lambdafunctiontimedouteventattributes";
import { MarkerRecordedEventAttributes } from "./markerrecordedeventattributes";
import { RecordMarkerFailedEventAttributes } from "./recordmarkerfailedeventattributes";
import { RequestCancelActivityTaskFailedEventAttributes } from "./requestcancelactivitytaskfailedeventattributes";
import { RequestCancelExternalWorkflowExecutionFailedEventAttributes } from "./requestcancelexternalworkflowexecutionfailedeventattributes";
import { RequestCancelExternalWorkflowExecutionInitiatedEventAttributes } from "./requestcancelexternalworkflowexecutioninitiatedeventattributes";
import { ScheduleActivityTaskFailedEventAttributes } from "./scheduleactivitytaskfailedeventattributes";
import { ScheduleLambdaFunctionFailedEventAttributes } from "./schedulelambdafunctionfailedeventattributes";
import { SignalExternalWorkflowExecutionFailedEventAttributes } from "./signalexternalworkflowexecutionfailedeventattributes";
import { SignalExternalWorkflowExecutionInitiatedEventAttributes } from "./signalexternalworkflowexecutioninitiatedeventattributes";
import { StartChildWorkflowExecutionFailedEventAttributes } from "./startchildworkflowexecutionfailedeventattributes";
import { StartChildWorkflowExecutionInitiatedEventAttributes } from "./startchildworkflowexecutioninitiatedeventattributes";
import { StartLambdaFunctionFailedEventAttributes } from "./startlambdafunctionfailedeventattributes";
import { StartTimerFailedEventAttributes } from "./starttimerfailedeventattributes";
import { TimerCanceledEventAttributes } from "./timercanceledeventattributes";
import { TimerFiredEventAttributes } from "./timerfiredeventattributes";
import { TimerStartedEventAttributes } from "./timerstartedeventattributes";
import { WorkflowExecutionCancelRequestedEventAttributes } from "./workflowexecutioncancelrequestedeventattributes";
import { WorkflowExecutionCanceledEventAttributes } from "./workflowexecutioncanceledeventattributes";
import { WorkflowExecutionCompletedEventAttributes } from "./workflowexecutioncompletedeventattributes";
import { WorkflowExecutionContinuedAsNewEventAttributes } from "./workflowexecutioncontinuedasneweventattributes";
import { WorkflowExecutionFailedEventAttributes } from "./workflowexecutionfailedeventattributes";
import { WorkflowExecutionSignaledEventAttributes } from "./workflowexecutionsignaledeventattributes";
import { WorkflowExecutionStartedEventAttributes } from "./workflowexecutionstartedeventattributes";
import { WorkflowExecutionTerminatedEventAttributes } from "./workflowexecutionterminatedeventattributes";
import { WorkflowExecutionTimedOutEventAttributes } from "./workflowexecutiontimedouteventattributes";



// HistoryEvent
/** 
 * <p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul>
**/
export class HistoryEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityTaskCancelRequestedEventAttributes" })
  activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=activityTaskCanceledEventAttributes" })
  activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=activityTaskCompletedEventAttributes" })
  activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=activityTaskFailedEventAttributes" })
  activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=activityTaskScheduledEventAttributes" })
  activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=activityTaskStartedEventAttributes" })
  activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=activityTaskTimedOutEventAttributes" })
  activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=cancelTimerFailedEventAttributes" })
  cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=cancelWorkflowExecutionFailedEventAttributes" })
  cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionCanceledEventAttributes" })
  childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionCompletedEventAttributes" })
  childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionFailedEventAttributes" })
  childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionStartedEventAttributes" })
  childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionTerminatedEventAttributes" })
  childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionTimedOutEventAttributes" })
  childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=completeWorkflowExecutionFailedEventAttributes" })
  completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=continueAsNewWorkflowExecutionFailedEventAttributes" })
  continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventAttributes" })
  decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskScheduledEventAttributes" })
  decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskStartedEventAttributes" })
  decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskTimedOutEventAttributes" })
  decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId: number;

  @SpeakeasyMetadata({ data: "json, name=eventTimestamp" })
  eventTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: EventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=externalWorkflowExecutionCancelRequestedEventAttributes" })
  externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=externalWorkflowExecutionSignaledEventAttributes" })
  externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=failWorkflowExecutionFailedEventAttributes" })
  failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionCompletedEventAttributes" })
  lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionFailedEventAttributes" })
  lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionScheduledEventAttributes" })
  lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionStartedEventAttributes" })
  lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionTimedOutEventAttributes" })
  lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=markerRecordedEventAttributes" })
  markerRecordedEventAttributes?: MarkerRecordedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=recordMarkerFailedEventAttributes" })
  recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=requestCancelActivityTaskFailedEventAttributes" })
  requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=requestCancelExternalWorkflowExecutionFailedEventAttributes" })
  requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=requestCancelExternalWorkflowExecutionInitiatedEventAttributes" })
  requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=scheduleActivityTaskFailedEventAttributes" })
  scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=scheduleLambdaFunctionFailedEventAttributes" })
  scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=signalExternalWorkflowExecutionFailedEventAttributes" })
  signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=signalExternalWorkflowExecutionInitiatedEventAttributes" })
  signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=startChildWorkflowExecutionFailedEventAttributes" })
  startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=startChildWorkflowExecutionInitiatedEventAttributes" })
  startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=startLambdaFunctionFailedEventAttributes" })
  startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=startTimerFailedEventAttributes" })
  startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=timerCanceledEventAttributes" })
  timerCanceledEventAttributes?: TimerCanceledEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=timerFiredEventAttributes" })
  timerFiredEventAttributes?: TimerFiredEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=timerStartedEventAttributes" })
  timerStartedEventAttributes?: TimerStartedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionCancelRequestedEventAttributes" })
  workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionCanceledEventAttributes" })
  workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionCompletedEventAttributes" })
  workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionContinuedAsNewEventAttributes" })
  workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionFailedEventAttributes" })
  workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionSignaledEventAttributes" })
  workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionStartedEventAttributes" })
  workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionTerminatedEventAttributes" })
  workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionTimedOutEventAttributes" })
  workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;
}
