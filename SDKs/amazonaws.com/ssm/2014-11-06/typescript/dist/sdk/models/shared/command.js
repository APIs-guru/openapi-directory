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
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { NotificationConfig } from "./notificationconfig";
import { CommandStatusEnum } from "./commandstatusenum";
import { Target } from "./target";
// Command
/**
 * Describes a command request.
**/
var Command = /** @class */ (function (_super) {
    __extends(Command, _super);
    function Command() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchOutputConfig" }),
        __metadata("design:type", CloudWatchOutputConfig)
    ], Command.prototype, "cloudWatchOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommandId" }),
        __metadata("design:type", String)
    ], Command.prototype, "commandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment" }),
        __metadata("design:type", String)
    ], Command.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletedCount" }),
        __metadata("design:type", Number)
    ], Command.prototype, "completedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryTimedOutCount" }),
        __metadata("design:type", Number)
    ], Command.prototype, "deliveryTimedOutCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentName" }),
        __metadata("design:type", String)
    ], Command.prototype, "documentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], Command.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorCount" }),
        __metadata("design:type", Number)
    ], Command.prototype, "errorCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpiresAfter" }),
        __metadata("design:type", Date)
    ], Command.prototype, "expiresAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceIds" }),
        __metadata("design:type", Array)
    ], Command.prototype, "instanceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", String)
    ], Command.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxErrors" }),
        __metadata("design:type", String)
    ], Command.prototype, "maxErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], Command.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3BucketName" }),
        __metadata("design:type", String)
    ], Command.prototype, "outputS3BucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3KeyPrefix" }),
        __metadata("design:type", String)
    ], Command.prototype, "outputS3KeyPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3Region" }),
        __metadata("design:type", String)
    ], Command.prototype, "outputS3Region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], Command.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedDateTime" }),
        __metadata("design:type", Date)
    ], Command.prototype, "requestedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRole" }),
        __metadata("design:type", String)
    ], Command.prototype, "serviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Command.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusDetails" }),
        __metadata("design:type", String)
    ], Command.prototype, "statusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetCount" }),
        __metadata("design:type", Number)
    ], Command.prototype, "targetCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], Command.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeoutSeconds" }),
        __metadata("design:type", Number)
    ], Command.prototype, "timeoutSeconds", void 0);
    return Command;
}(SpeakeasyBase));
export { Command };
