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
import { BillingDetails } from "./billingdetails";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { SyncExecutionStatusEnum } from "./syncexecutionstatusenum";
var StartSyncExecutionOutput = /** @class */ (function (_super) {
    __extends(StartSyncExecutionOutput, _super);
    function StartSyncExecutionOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingDetails" }),
        __metadata("design:type", BillingDetails)
    ], StartSyncExecutionOutput.prototype, "billingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cause" }),
        __metadata("design:type", String)
    ], StartSyncExecutionOutput.prototype, "cause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], StartSyncExecutionOutput.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionArn" }),
        __metadata("design:type", String)
    ], StartSyncExecutionOutput.prototype, "executionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=input" }),
        __metadata("design:type", String)
    ], StartSyncExecutionOutput.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputDetails" }),
        __metadata("design:type", CloudWatchEventsExecutionDataDetails)
    ], StartSyncExecutionOutput.prototype, "inputDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], StartSyncExecutionOutput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=output" }),
        __metadata("design:type", String)
    ], StartSyncExecutionOutput.prototype, "output", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputDetails" }),
        __metadata("design:type", CloudWatchEventsExecutionDataDetails)
    ], StartSyncExecutionOutput.prototype, "outputDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], StartSyncExecutionOutput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateMachineArn" }),
        __metadata("design:type", String)
    ], StartSyncExecutionOutput.prototype, "stateMachineArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], StartSyncExecutionOutput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopDate" }),
        __metadata("design:type", Date)
    ], StartSyncExecutionOutput.prototype, "stopDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traceHeader" }),
        __metadata("design:type", String)
    ], StartSyncExecutionOutput.prototype, "traceHeader", void 0);
    return StartSyncExecutionOutput;
}(SpeakeasyBase));
export { StartSyncExecutionOutput };
