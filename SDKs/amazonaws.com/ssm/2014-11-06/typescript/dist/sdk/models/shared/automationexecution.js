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
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { AutomationSubtypeEnum } from "./automationsubtypeenum";
import { ExecutionModeEnum } from "./executionmodeenum";
import { ProgressCounters } from "./progresscounters";
import { ResolvedTargets } from "./resolvedtargets";
import { Runbook } from "./runbook";
import { StepExecution } from "./stepexecution";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
// AutomationExecution
/**
 * Detailed information about the current state of an individual Automation execution.
**/
var AutomationExecution = /** @class */ (function (_super) {
    __extends(AutomationExecution, _super);
    function AutomationExecution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationId" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "associationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomationExecutionId" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "automationExecutionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomationExecutionStatus" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "automationExecutionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomationSubtype" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "automationSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChangeRequestName" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "changeRequestName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentAction" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "currentAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentStepName" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "currentStepName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentName" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "documentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutedBy" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "executedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionEndTime" }),
        __metadata("design:type", Date)
    ], AutomationExecution.prototype, "executionEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionStartTime" }),
        __metadata("design:type", Date)
    ], AutomationExecution.prototype, "executionStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureMessage" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "failureMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxErrors" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "maxErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mode" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpsItemId" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "opsItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Outputs" }),
        __metadata("design:type", Map)
    ], AutomationExecution.prototype, "outputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], AutomationExecution.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentAutomationExecutionId" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "parentAutomationExecutionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgressCounters" }),
        __metadata("design:type", ProgressCounters)
    ], AutomationExecution.prototype, "progressCounters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResolvedTargets" }),
        __metadata("design:type", ResolvedTargets)
    ], AutomationExecution.prototype, "resolvedTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Runbooks", elemType: Runbook }),
        __metadata("design:type", Array)
    ], AutomationExecution.prototype, "runbooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledTime" }),
        __metadata("design:type", Date)
    ], AutomationExecution.prototype, "scheduledTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StepExecutions", elemType: StepExecution }),
        __metadata("design:type", Array)
    ], AutomationExecution.prototype, "stepExecutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StepExecutionsTruncated" }),
        __metadata("design:type", Boolean)
    ], AutomationExecution.prototype, "stepExecutionsTruncated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Target" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetLocations", elemType: TargetLocation }),
        __metadata("design:type", Array)
    ], AutomationExecution.prototype, "targetLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetMaps" }),
        __metadata("design:type", Array)
    ], AutomationExecution.prototype, "targetMaps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetParameterName" }),
        __metadata("design:type", String)
    ], AutomationExecution.prototype, "targetParameterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], AutomationExecution.prototype, "targets", void 0);
    return AutomationExecution;
}(SpeakeasyBase));
export { AutomationExecution };
