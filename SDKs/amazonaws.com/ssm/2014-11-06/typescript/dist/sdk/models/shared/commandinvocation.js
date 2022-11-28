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
import { CommandPlugin } from "./commandplugin";
import { NotificationConfig } from "./notificationconfig";
import { CommandInvocationStatusEnum } from "./commandinvocationstatusenum";
// CommandInvocation
/**
 * An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran.
**/
var CommandInvocation = /** @class */ (function (_super) {
    __extends(CommandInvocation, _super);
    function CommandInvocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchOutputConfig" }),
        __metadata("design:type", CloudWatchOutputConfig)
    ], CommandInvocation.prototype, "cloudWatchOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommandId" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "commandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommandPlugins", elemType: CommandPlugin }),
        __metadata("design:type", Array)
    ], CommandInvocation.prototype, "commandPlugins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentName" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "documentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceName" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "instanceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], CommandInvocation.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedDateTime" }),
        __metadata("design:type", Date)
    ], CommandInvocation.prototype, "requestedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRole" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "serviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StandardErrorUrl" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "standardErrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StandardOutputUrl" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "standardOutputUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusDetails" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "statusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TraceOutput" }),
        __metadata("design:type", String)
    ], CommandInvocation.prototype, "traceOutput", void 0);
    return CommandInvocation;
}(SpeakeasyBase));
export { CommandInvocation };
