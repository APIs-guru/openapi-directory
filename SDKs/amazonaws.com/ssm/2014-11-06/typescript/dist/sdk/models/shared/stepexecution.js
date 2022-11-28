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
import { FailureDetails } from "./failuredetails";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
// StepExecution
/**
 * Detailed information about an the execution state of an Automation step.
**/
var StepExecution = /** @class */ (function (_super) {
    __extends(StepExecution, _super);
    function StepExecution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], StepExecution.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionEndTime" }),
        __metadata("design:type", Date)
    ], StepExecution.prototype, "executionEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionStartTime" }),
        __metadata("design:type", Date)
    ], StepExecution.prototype, "executionStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureDetails" }),
        __metadata("design:type", FailureDetails)
    ], StepExecution.prototype, "failureDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureMessage" }),
        __metadata("design:type", String)
    ], StepExecution.prototype, "failureMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Inputs" }),
        __metadata("design:type", Map)
    ], StepExecution.prototype, "inputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsCritical" }),
        __metadata("design:type", Boolean)
    ], StepExecution.prototype, "isCritical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsEnd" }),
        __metadata("design:type", Boolean)
    ], StepExecution.prototype, "isEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAttempts" }),
        __metadata("design:type", Number)
    ], StepExecution.prototype, "maxAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextStep" }),
        __metadata("design:type", String)
    ], StepExecution.prototype, "nextStep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnFailure" }),
        __metadata("design:type", String)
    ], StepExecution.prototype, "onFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Outputs" }),
        __metadata("design:type", Map)
    ], StepExecution.prototype, "outputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverriddenParameters" }),
        __metadata("design:type", Map)
    ], StepExecution.prototype, "overriddenParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Response" }),
        __metadata("design:type", String)
    ], StepExecution.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResponseCode" }),
        __metadata("design:type", String)
    ], StepExecution.prototype, "responseCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StepExecutionId" }),
        __metadata("design:type", String)
    ], StepExecution.prototype, "stepExecutionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StepName" }),
        __metadata("design:type", String)
    ], StepExecution.prototype, "stepName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StepStatus" }),
        __metadata("design:type", String)
    ], StepExecution.prototype, "stepStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetLocation" }),
        __metadata("design:type", TargetLocation)
    ], StepExecution.prototype, "targetLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], StepExecution.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeoutSeconds" }),
        __metadata("design:type", Number)
    ], StepExecution.prototype, "timeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidNextSteps" }),
        __metadata("design:type", Array)
    ], StepExecution.prototype, "validNextSteps", void 0);
    return StepExecution;
}(SpeakeasyBase));
export { StepExecution };
