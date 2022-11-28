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
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { NotificationConfig } from "./notificationconfig";
import { Target } from "./target";
var SendCommandRequest = /** @class */ (function (_super) {
    __extends(SendCommandRequest, _super);
    function SendCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchOutputConfig" }),
        __metadata("design:type", CloudWatchOutputConfig)
    ], SendCommandRequest.prototype, "cloudWatchOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentHash" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "documentHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentHashType" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "documentHashType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentName" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "documentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceIds" }),
        __metadata("design:type", Array)
    ], SendCommandRequest.prototype, "instanceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxErrors" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "maxErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], SendCommandRequest.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3BucketName" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "outputS3BucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3KeyPrefix" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "outputS3KeyPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3Region" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "outputS3Region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], SendCommandRequest.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" }),
        __metadata("design:type", String)
    ], SendCommandRequest.prototype, "serviceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], SendCommandRequest.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeoutSeconds" }),
        __metadata("design:type", Number)
    ], SendCommandRequest.prototype, "timeoutSeconds", void 0);
    return SendCommandRequest;
}(SpeakeasyBase));
export { SendCommandRequest };
