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
import { AutomationTypeEnum } from "./automationtypeenum";
import { ExecutionModeEnum } from "./executionmodeenum";
import { ResolvedTargets } from "./resolvedtargets";
import { Runbook } from "./runbook";
import { Target } from "./target";
// AutomationExecutionMetadata
/**
 * Details about a specific Automation execution.
**/
var AutomationExecutionMetadata = /** @class */ (function (_super) {
    __extends(AutomationExecutionMetadata, _super);
    function AutomationExecutionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationId" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "associationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomationExecutionId" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "automationExecutionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomationExecutionStatus" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "automationExecutionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomationSubtype" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "automationSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomationType" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "automationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChangeRequestName" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "changeRequestName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentAction" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "currentAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentStepName" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "currentStepName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentName" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "documentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutedBy" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "executedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionEndTime" }),
        __metadata("design:type", Date)
    ], AutomationExecutionMetadata.prototype, "executionEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionStartTime" }),
        __metadata("design:type", Date)
    ], AutomationExecutionMetadata.prototype, "executionStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureMessage" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "failureMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogFile" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "logFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxErrors" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "maxErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mode" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpsItemId" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "opsItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Outputs" }),
        __metadata("design:type", Map)
    ], AutomationExecutionMetadata.prototype, "outputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentAutomationExecutionId" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "parentAutomationExecutionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResolvedTargets" }),
        __metadata("design:type", ResolvedTargets)
    ], AutomationExecutionMetadata.prototype, "resolvedTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Runbooks", elemType: Runbook }),
        __metadata("design:type", Array)
    ], AutomationExecutionMetadata.prototype, "runbooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledTime" }),
        __metadata("design:type", Date)
    ], AutomationExecutionMetadata.prototype, "scheduledTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Target" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetMaps" }),
        __metadata("design:type", Array)
    ], AutomationExecutionMetadata.prototype, "targetMaps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetParameterName" }),
        __metadata("design:type", String)
    ], AutomationExecutionMetadata.prototype, "targetParameterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], AutomationExecutionMetadata.prototype, "targets", void 0);
    return AutomationExecutionMetadata;
}(SpeakeasyBase));
export { AutomationExecutionMetadata };
