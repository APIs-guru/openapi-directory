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
import { ActivityFailedEventDetails } from "./activityfailedeventdetails";
import { ActivityScheduleFailedEventDetails } from "./activityschedulefailedeventdetails";
import { ActivityScheduledEventDetails } from "./activityscheduledeventdetails";
import { ActivityStartedEventDetails } from "./activitystartedeventdetails";
import { ActivitySucceededEventDetails } from "./activitysucceededeventdetails";
import { ActivityTimedOutEventDetails } from "./activitytimedouteventdetails";
import { ExecutionAbortedEventDetails } from "./executionabortedeventdetails";
import { ExecutionFailedEventDetails } from "./executionfailedeventdetails";
import { ExecutionStartedEventDetails } from "./executionstartedeventdetails";
import { ExecutionSucceededEventDetails } from "./executionsucceededeventdetails";
import { ExecutionTimedOutEventDetails } from "./executiontimedouteventdetails";
import { LambdaFunctionFailedEventDetails } from "./lambdafunctionfailedeventdetails";
import { LambdaFunctionScheduleFailedEventDetails } from "./lambdafunctionschedulefailedeventdetails";
import { LambdaFunctionScheduledEventDetails } from "./lambdafunctionscheduledeventdetails";
import { LambdaFunctionStartFailedEventDetails } from "./lambdafunctionstartfailedeventdetails";
import { LambdaFunctionSucceededEventDetails } from "./lambdafunctionsucceededeventdetails";
import { LambdaFunctionTimedOutEventDetails } from "./lambdafunctiontimedouteventdetails";
import { MapIterationEventDetails } from "./mapiterationeventdetails";
import { MapStateStartedEventDetails } from "./mapstatestartedeventdetails";
import { StateEnteredEventDetails } from "./stateenteredeventdetails";
import { StateExitedEventDetails } from "./stateexitedeventdetails";
import { TaskFailedEventDetails } from "./taskfailedeventdetails";
import { TaskScheduledEventDetails } from "./taskscheduledeventdetails";
import { TaskStartFailedEventDetails } from "./taskstartfailedeventdetails";
import { TaskStartedEventDetails } from "./taskstartedeventdetails";
import { TaskSubmitFailedEventDetails } from "./tasksubmitfailedeventdetails";
import { TaskSubmittedEventDetails } from "./tasksubmittedeventdetails";
import { TaskSucceededEventDetails } from "./tasksucceededeventdetails";
import { TaskTimedOutEventDetails } from "./tasktimedouteventdetails";
import { HistoryEventTypeEnum } from "./historyeventtypeenum";
// HistoryEvent
/**
 * Contains details about the events of an execution.
**/
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityFailedEventDetails" }),
        __metadata("design:type", ActivityFailedEventDetails)
    ], HistoryEvent.prototype, "activityFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityScheduleFailedEventDetails" }),
        __metadata("design:type", ActivityScheduleFailedEventDetails)
    ], HistoryEvent.prototype, "activityScheduleFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityScheduledEventDetails" }),
        __metadata("design:type", ActivityScheduledEventDetails)
    ], HistoryEvent.prototype, "activityScheduledEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityStartedEventDetails" }),
        __metadata("design:type", ActivityStartedEventDetails)
    ], HistoryEvent.prototype, "activityStartedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activitySucceededEventDetails" }),
        __metadata("design:type", ActivitySucceededEventDetails)
    ], HistoryEvent.prototype, "activitySucceededEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTimedOutEventDetails" }),
        __metadata("design:type", ActivityTimedOutEventDetails)
    ], HistoryEvent.prototype, "activityTimedOutEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionAbortedEventDetails" }),
        __metadata("design:type", ExecutionAbortedEventDetails)
    ], HistoryEvent.prototype, "executionAbortedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionFailedEventDetails" }),
        __metadata("design:type", ExecutionFailedEventDetails)
    ], HistoryEvent.prototype, "executionFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionStartedEventDetails" }),
        __metadata("design:type", ExecutionStartedEventDetails)
    ], HistoryEvent.prototype, "executionStartedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionSucceededEventDetails" }),
        __metadata("design:type", ExecutionSucceededEventDetails)
    ], HistoryEvent.prototype, "executionSucceededEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionTimedOutEventDetails" }),
        __metadata("design:type", ExecutionTimedOutEventDetails)
    ], HistoryEvent.prototype, "executionTimedOutEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], HistoryEvent.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionFailedEventDetails" }),
        __metadata("design:type", LambdaFunctionFailedEventDetails)
    ], HistoryEvent.prototype, "lambdaFunctionFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionScheduleFailedEventDetails" }),
        __metadata("design:type", LambdaFunctionScheduleFailedEventDetails)
    ], HistoryEvent.prototype, "lambdaFunctionScheduleFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionScheduledEventDetails" }),
        __metadata("design:type", LambdaFunctionScheduledEventDetails)
    ], HistoryEvent.prototype, "lambdaFunctionScheduledEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionStartFailedEventDetails" }),
        __metadata("design:type", LambdaFunctionStartFailedEventDetails)
    ], HistoryEvent.prototype, "lambdaFunctionStartFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionSucceededEventDetails" }),
        __metadata("design:type", LambdaFunctionSucceededEventDetails)
    ], HistoryEvent.prototype, "lambdaFunctionSucceededEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionTimedOutEventDetails" }),
        __metadata("design:type", LambdaFunctionTimedOutEventDetails)
    ], HistoryEvent.prototype, "lambdaFunctionTimedOutEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapIterationAbortedEventDetails" }),
        __metadata("design:type", MapIterationEventDetails)
    ], HistoryEvent.prototype, "mapIterationAbortedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapIterationFailedEventDetails" }),
        __metadata("design:type", MapIterationEventDetails)
    ], HistoryEvent.prototype, "mapIterationFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapIterationStartedEventDetails" }),
        __metadata("design:type", MapIterationEventDetails)
    ], HistoryEvent.prototype, "mapIterationStartedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapIterationSucceededEventDetails" }),
        __metadata("design:type", MapIterationEventDetails)
    ], HistoryEvent.prototype, "mapIterationSucceededEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapStateStartedEventDetails" }),
        __metadata("design:type", MapStateStartedEventDetails)
    ], HistoryEvent.prototype, "mapStateStartedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousEventId" }),
        __metadata("design:type", Number)
    ], HistoryEvent.prototype, "previousEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateEnteredEventDetails" }),
        __metadata("design:type", StateEnteredEventDetails)
    ], HistoryEvent.prototype, "stateEnteredEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateExitedEventDetails" }),
        __metadata("design:type", StateExitedEventDetails)
    ], HistoryEvent.prototype, "stateExitedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskFailedEventDetails" }),
        __metadata("design:type", TaskFailedEventDetails)
    ], HistoryEvent.prototype, "taskFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskScheduledEventDetails" }),
        __metadata("design:type", TaskScheduledEventDetails)
    ], HistoryEvent.prototype, "taskScheduledEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskStartFailedEventDetails" }),
        __metadata("design:type", TaskStartFailedEventDetails)
    ], HistoryEvent.prototype, "taskStartFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskStartedEventDetails" }),
        __metadata("design:type", TaskStartedEventDetails)
    ], HistoryEvent.prototype, "taskStartedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskSubmitFailedEventDetails" }),
        __metadata("design:type", TaskSubmitFailedEventDetails)
    ], HistoryEvent.prototype, "taskSubmitFailedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskSubmittedEventDetails" }),
        __metadata("design:type", TaskSubmittedEventDetails)
    ], HistoryEvent.prototype, "taskSubmittedEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskSucceededEventDetails" }),
        __metadata("design:type", TaskSucceededEventDetails)
    ], HistoryEvent.prototype, "taskSucceededEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskTimedOutEventDetails" }),
        __metadata("design:type", TaskTimedOutEventDetails)
    ], HistoryEvent.prototype, "taskTimedOutEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], HistoryEvent.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], HistoryEvent.prototype, "type", void 0);
    return HistoryEvent;
}(SpeakeasyBase));
export { HistoryEvent };
