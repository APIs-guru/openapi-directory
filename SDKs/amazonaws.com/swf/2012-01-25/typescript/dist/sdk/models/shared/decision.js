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
import { CancelTimerDecisionAttributes } from "./canceltimerdecisionattributes";
import { CancelWorkflowExecutionDecisionAttributes } from "./cancelworkflowexecutiondecisionattributes";
import { CompleteWorkflowExecutionDecisionAttributes } from "./completeworkflowexecutiondecisionattributes";
import { ContinueAsNewWorkflowExecutionDecisionAttributes } from "./continueasnewworkflowexecutiondecisionattributes";
import { DecisionTypeEnum } from "./decisiontypeenum";
import { FailWorkflowExecutionDecisionAttributes } from "./failworkflowexecutiondecisionattributes";
import { RecordMarkerDecisionAttributes } from "./recordmarkerdecisionattributes";
import { RequestCancelActivityTaskDecisionAttributes } from "./requestcancelactivitytaskdecisionattributes";
import { RequestCancelExternalWorkflowExecutionDecisionAttributes } from "./requestcancelexternalworkflowexecutiondecisionattributes";
import { ScheduleActivityTaskDecisionAttributes } from "./scheduleactivitytaskdecisionattributes";
import { ScheduleLambdaFunctionDecisionAttributes } from "./schedulelambdafunctiondecisionattributes";
import { SignalExternalWorkflowExecutionDecisionAttributes } from "./signalexternalworkflowexecutiondecisionattributes";
import { StartChildWorkflowExecutionDecisionAttributes } from "./startchildworkflowexecutiondecisionattributes";
import { StartTimerDecisionAttributes } from "./starttimerdecisionattributes";
// Decision
/**
 * <p>Specifies a decision made by the decider. A decision can be one of these types:</p> <ul> <li> <p> <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the history.</p> </li> <li> <p> <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCanceled</code> event in the history.</p> </li> <li> <p> <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCompleted</code> event in the history .</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event is recorded in the history.</p> </li> <li> <p> <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code> event in the history.</p> </li> <li> <p> <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.</p> </li> <li> <p> <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to <a>RecordActivityTaskHeartbeat</a>.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>ScheduleActivityTask</code> – Schedules an activity task.</p> </li> <li> <p> <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a separate workflow execution with its own history.</p> </li> <li> <p> <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p> </li> </ul> <p> <b>Access Control</b> </p> <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <p> <b>Decision Failure</b> </p> <p>Decisions can fail for several reasons</p> <ul> <li> <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p> </li> <li> <p>A limit on your account was reached.</p> </li> <li> <p>The decision lacks sufficient permissions.</p> </li> </ul> <p>One of the following events might be added to the history to indicate an error. The event attribute's <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <ul> <li> <p> <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – A <code>RequestCancelActivityTask</code> decision failed. This could happen if there is no open activity task with the specified activityId.</p> </li> <li> <p> <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This could happen if there is another open timer with the same timerId.</p> </li> <li> <p> <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed. This could happen if there is no open timer with the specified timerId.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – A <code>StartChildWorkflowExecution</code> decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – A <code>SignalExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – A <code>RequestCancelExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A <code>CancelWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – A <code>CompleteWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – A <code>ContinueAsNewWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> </ul> <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p> <note> <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>, <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call <a>RespondDecisionTaskCompleted</a> without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.</p> </note> <p> <b>How to Code a Decision</b> </p> <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p> <ul> <li> <p> <code> <a>ScheduleActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CompleteWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>FailWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RecordMarkerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>SignalExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartChildWorkflowExecutionDecisionAttributes</a> </code> </p> </li> </ul>
**/
var Decision = /** @class */ (function (_super) {
    __extends(Decision, _super);
    function Decision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelTimerDecisionAttributes" }),
        __metadata("design:type", CancelTimerDecisionAttributes)
    ], Decision.prototype, "cancelTimerDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelWorkflowExecutionDecisionAttributes" }),
        __metadata("design:type", CancelWorkflowExecutionDecisionAttributes)
    ], Decision.prototype, "cancelWorkflowExecutionDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completeWorkflowExecutionDecisionAttributes" }),
        __metadata("design:type", CompleteWorkflowExecutionDecisionAttributes)
    ], Decision.prototype, "completeWorkflowExecutionDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continueAsNewWorkflowExecutionDecisionAttributes" }),
        __metadata("design:type", ContinueAsNewWorkflowExecutionDecisionAttributes)
    ], Decision.prototype, "continueAsNewWorkflowExecutionDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decisionType" }),
        __metadata("design:type", String)
    ], Decision.prototype, "decisionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failWorkflowExecutionDecisionAttributes" }),
        __metadata("design:type", FailWorkflowExecutionDecisionAttributes)
    ], Decision.prototype, "failWorkflowExecutionDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordMarkerDecisionAttributes" }),
        __metadata("design:type", RecordMarkerDecisionAttributes)
    ], Decision.prototype, "recordMarkerDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestCancelActivityTaskDecisionAttributes" }),
        __metadata("design:type", RequestCancelActivityTaskDecisionAttributes)
    ], Decision.prototype, "requestCancelActivityTaskDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestCancelExternalWorkflowExecutionDecisionAttributes" }),
        __metadata("design:type", RequestCancelExternalWorkflowExecutionDecisionAttributes)
    ], Decision.prototype, "requestCancelExternalWorkflowExecutionDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleActivityTaskDecisionAttributes" }),
        __metadata("design:type", ScheduleActivityTaskDecisionAttributes)
    ], Decision.prototype, "scheduleActivityTaskDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleLambdaFunctionDecisionAttributes" }),
        __metadata("design:type", ScheduleLambdaFunctionDecisionAttributes)
    ], Decision.prototype, "scheduleLambdaFunctionDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signalExternalWorkflowExecutionDecisionAttributes" }),
        __metadata("design:type", SignalExternalWorkflowExecutionDecisionAttributes)
    ], Decision.prototype, "signalExternalWorkflowExecutionDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startChildWorkflowExecutionDecisionAttributes" }),
        __metadata("design:type", StartChildWorkflowExecutionDecisionAttributes)
    ], Decision.prototype, "startChildWorkflowExecutionDecisionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimerDecisionAttributes" }),
        __metadata("design:type", StartTimerDecisionAttributes)
    ], Decision.prototype, "startTimerDecisionAttributes", void 0);
    return Decision;
}(SpeakeasyBase));
export { Decision };
