var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTaskCancelRequestedEventAttributes" }),
        __metadata("design:type", ActivityTaskCancelRequestedEventAttributes)
    ], HistoryEvent.prototype, "activityTaskCancelRequestedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTaskCanceledEventAttributes" }),
        __metadata("design:type", ActivityTaskCanceledEventAttributes)
    ], HistoryEvent.prototype, "activityTaskCanceledEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTaskCompletedEventAttributes" }),
        __metadata("design:type", ActivityTaskCompletedEventAttributes)
    ], HistoryEvent.prototype, "activityTaskCompletedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTaskFailedEventAttributes" }),
        __metadata("design:type", ActivityTaskFailedEventAttributes)
    ], HistoryEvent.prototype, "activityTaskFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTaskScheduledEventAttributes" }),
        __metadata("design:type", ActivityTaskScheduledEventAttributes)
    ], HistoryEvent.prototype, "activityTaskScheduledEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTaskStartedEventAttributes" }),
        __metadata("design:type", ActivityTaskStartedEventAttributes)
    ], HistoryEvent.prototype, "activityTaskStartedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTaskTimedOutEventAttributes" }),
        __metadata("design:type", ActivityTaskTimedOutEventAttributes)
    ], HistoryEvent.prototype, "activityTaskTimedOutEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelTimerFailedEventAttributes" }),
        __metadata("design:type", CancelTimerFailedEventAttributes)
    ], HistoryEvent.prototype, "cancelTimerFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", CancelWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "cancelWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionCanceledEventAttributes" }),
        __metadata("design:type", ChildWorkflowExecutionCanceledEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionCanceledEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionCompletedEventAttributes" }),
        __metadata("design:type", ChildWorkflowExecutionCompletedEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionCompletedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", ChildWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionStartedEventAttributes" }),
        __metadata("design:type", ChildWorkflowExecutionStartedEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionStartedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionTerminatedEventAttributes" }),
        __metadata("design:type", ChildWorkflowExecutionTerminatedEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionTerminatedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childWorkflowExecutionTimedOutEventAttributes" }),
        __metadata("design:type", ChildWorkflowExecutionTimedOutEventAttributes)
    ], HistoryEvent.prototype, "childWorkflowExecutionTimedOutEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completeWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", CompleteWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "completeWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continueAsNewWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", ContinueAsNewWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "continueAsNewWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventAttributes" }),
        __metadata("design:type", DecisionTaskCompletedEventAttributes)
    ], HistoryEvent.prototype, "decisionTaskCompletedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decisionTaskScheduledEventAttributes" }),
        __metadata("design:type", DecisionTaskScheduledEventAttributes)
    ], HistoryEvent.prototype, "decisionTaskScheduledEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decisionTaskStartedEventAttributes" }),
        __metadata("design:type", DecisionTaskStartedEventAttributes)
    ], HistoryEvent.prototype, "decisionTaskStartedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decisionTaskTimedOutEventAttributes" }),
        __metadata("design:type", DecisionTaskTimedOutEventAttributes)
    ], HistoryEvent.prototype, "decisionTaskTimedOutEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventId" }),
        __metadata("design:type", Number)
    ], HistoryEvent.prototype, "eventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTimestamp" }),
        __metadata("design:type", Date)
    ], HistoryEvent.prototype, "eventTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], HistoryEvent.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalWorkflowExecutionCancelRequestedEventAttributes" }),
        __metadata("design:type", ExternalWorkflowExecutionCancelRequestedEventAttributes)
    ], HistoryEvent.prototype, "externalWorkflowExecutionCancelRequestedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalWorkflowExecutionSignaledEventAttributes" }),
        __metadata("design:type", ExternalWorkflowExecutionSignaledEventAttributes)
    ], HistoryEvent.prototype, "externalWorkflowExecutionSignaledEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", FailWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "failWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionCompletedEventAttributes" }),
        __metadata("design:type", LambdaFunctionCompletedEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionCompletedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionFailedEventAttributes" }),
        __metadata("design:type", LambdaFunctionFailedEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionScheduledEventAttributes" }),
        __metadata("design:type", LambdaFunctionScheduledEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionScheduledEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionStartedEventAttributes" }),
        __metadata("design:type", LambdaFunctionStartedEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionStartedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionTimedOutEventAttributes" }),
        __metadata("design:type", LambdaFunctionTimedOutEventAttributes)
    ], HistoryEvent.prototype, "lambdaFunctionTimedOutEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markerRecordedEventAttributes" }),
        __metadata("design:type", MarkerRecordedEventAttributes)
    ], HistoryEvent.prototype, "markerRecordedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordMarkerFailedEventAttributes" }),
        __metadata("design:type", RecordMarkerFailedEventAttributes)
    ], HistoryEvent.prototype, "recordMarkerFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestCancelActivityTaskFailedEventAttributes" }),
        __metadata("design:type", RequestCancelActivityTaskFailedEventAttributes)
    ], HistoryEvent.prototype, "requestCancelActivityTaskFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestCancelExternalWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", RequestCancelExternalWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "requestCancelExternalWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestCancelExternalWorkflowExecutionInitiatedEventAttributes" }),
        __metadata("design:type", RequestCancelExternalWorkflowExecutionInitiatedEventAttributes)
    ], HistoryEvent.prototype, "requestCancelExternalWorkflowExecutionInitiatedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleActivityTaskFailedEventAttributes" }),
        __metadata("design:type", ScheduleActivityTaskFailedEventAttributes)
    ], HistoryEvent.prototype, "scheduleActivityTaskFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleLambdaFunctionFailedEventAttributes" }),
        __metadata("design:type", ScheduleLambdaFunctionFailedEventAttributes)
    ], HistoryEvent.prototype, "scheduleLambdaFunctionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signalExternalWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", SignalExternalWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "signalExternalWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signalExternalWorkflowExecutionInitiatedEventAttributes" }),
        __metadata("design:type", SignalExternalWorkflowExecutionInitiatedEventAttributes)
    ], HistoryEvent.prototype, "signalExternalWorkflowExecutionInitiatedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startChildWorkflowExecutionFailedEventAttributes" }),
        __metadata("design:type", StartChildWorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "startChildWorkflowExecutionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startChildWorkflowExecutionInitiatedEventAttributes" }),
        __metadata("design:type", StartChildWorkflowExecutionInitiatedEventAttributes)
    ], HistoryEvent.prototype, "startChildWorkflowExecutionInitiatedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startLambdaFunctionFailedEventAttributes" }),
        __metadata("design:type", StartLambdaFunctionFailedEventAttributes)
    ], HistoryEvent.prototype, "startLambdaFunctionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimerFailedEventAttributes" }),
        __metadata("design:type", StartTimerFailedEventAttributes)
    ], HistoryEvent.prototype, "startTimerFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timerCanceledEventAttributes" }),
        __metadata("design:type", TimerCanceledEventAttributes)
    ], HistoryEvent.prototype, "timerCanceledEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timerFiredEventAttributes" }),
        __metadata("design:type", TimerFiredEventAttributes)
    ], HistoryEvent.prototype, "timerFiredEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timerStartedEventAttributes" }),
        __metadata("design:type", TimerStartedEventAttributes)
    ], HistoryEvent.prototype, "timerStartedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecutionCancelRequestedEventAttributes" }),
        __metadata("design:type", WorkflowExecutionCancelRequestedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionCancelRequestedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecutionCanceledEventAttributes" }),
        __metadata("design:type", WorkflowExecutionCanceledEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionCanceledEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecutionCompletedEventAttributes" }),
        __metadata("design:type", WorkflowExecutionCompletedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionCompletedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecutionContinuedAsNewEventAttributes" }),
        __metadata("design:type", WorkflowExecutionContinuedAsNewEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionContinuedAsNewEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecutionFailedEventAttributes" }),
        __metadata("design:type", WorkflowExecutionFailedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionFailedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecutionSignaledEventAttributes" }),
        __metadata("design:type", WorkflowExecutionSignaledEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionSignaledEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecutionStartedEventAttributes" }),
        __metadata("design:type", WorkflowExecutionStartedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionStartedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecutionTerminatedEventAttributes" }),
        __metadata("design:type", WorkflowExecutionTerminatedEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionTerminatedEventAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecutionTimedOutEventAttributes" }),
        __metadata("design:type", WorkflowExecutionTimedOutEventAttributes)
    ], HistoryEvent.prototype, "workflowExecutionTimedOutEventAttributes", void 0);
    return HistoryEvent;
}(SpeakeasyBase));
export { HistoryEvent };
