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
import * as shared from "../shared";
var UpdateEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentPathParams, _super);
    function UpdateEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Name" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentPathParams.prototype, "name", void 0);
    return UpdateEnvironmentPathParams;
}(SpeakeasyBase));
export { UpdateEnvironmentPathParams };
var UpdateEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentHeaders, _super);
    function UpdateEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateEnvironmentHeaders;
}(SpeakeasyBase));
export { UpdateEnvironmentHeaders };
// UpdateEnvironmentRequestBodyLoggingConfiguration
/**
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
var UpdateEnvironmentRequestBodyLoggingConfiguration = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequestBodyLoggingConfiguration, _super);
    function UpdateEnvironmentRequestBodyLoggingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DagProcessingLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "dagProcessingLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchedulerLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "schedulerLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "taskLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebserverLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "webserverLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkerLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], UpdateEnvironmentRequestBodyLoggingConfiguration.prototype, "workerLogs", void 0);
    return UpdateEnvironmentRequestBodyLoggingConfiguration;
}(SpeakeasyBase));
export { UpdateEnvironmentRequestBodyLoggingConfiguration };
// UpdateEnvironmentRequestBodyNetworkConfiguration
/**
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
**/
var UpdateEnvironmentRequestBodyNetworkConfiguration = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequestBodyNetworkConfiguration, _super);
    function UpdateEnvironmentRequestBodyNetworkConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateEnvironmentRequestBodyNetworkConfiguration.prototype, "securityGroupIds", void 0);
    return UpdateEnvironmentRequestBodyNetworkConfiguration;
}(SpeakeasyBase));
export { UpdateEnvironmentRequestBodyNetworkConfiguration };
export var UpdateEnvironmentRequestBodyWebserverAccessModeEnum;
(function (UpdateEnvironmentRequestBodyWebserverAccessModeEnum) {
    UpdateEnvironmentRequestBodyWebserverAccessModeEnum["PrivateOnly"] = "PRIVATE_ONLY";
    UpdateEnvironmentRequestBodyWebserverAccessModeEnum["PublicOnly"] = "PUBLIC_ONLY";
})(UpdateEnvironmentRequestBodyWebserverAccessModeEnum || (UpdateEnvironmentRequestBodyWebserverAccessModeEnum = {}));
var UpdateEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequestBody, _super);
    function UpdateEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirflowConfigurationOptions" }),
        __metadata("design:type", Map)
    ], UpdateEnvironmentRequestBody.prototype, "airflowConfigurationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirflowVersion" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "airflowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DagS3Path" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "dagS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentClass" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "environmentClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" }),
        __metadata("design:type", UpdateEnvironmentRequestBodyLoggingConfiguration)
    ], UpdateEnvironmentRequestBody.prototype, "loggingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxWorkers" }),
        __metadata("design:type", Number)
    ], UpdateEnvironmentRequestBody.prototype, "maxWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinWorkers" }),
        __metadata("design:type", Number)
    ], UpdateEnvironmentRequestBody.prototype, "minWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfiguration" }),
        __metadata("design:type", UpdateEnvironmentRequestBodyNetworkConfiguration)
    ], UpdateEnvironmentRequestBody.prototype, "networkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PluginsS3ObjectVersion" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "pluginsS3ObjectVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PluginsS3Path" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "pluginsS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequirementsS3ObjectVersion" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "requirementsS3ObjectVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequirementsS3Path" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "requirementsS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedulers" }),
        __metadata("design:type", Number)
    ], UpdateEnvironmentRequestBody.prototype, "schedulers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceBucketArn" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "sourceBucketArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebserverAccessMode" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "webserverAccessMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceWindowStart" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBody.prototype, "weeklyMaintenanceWindowStart", void 0);
    return UpdateEnvironmentRequestBody;
}(SpeakeasyBase));
export { UpdateEnvironmentRequestBody };
var UpdateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequest, _super);
    function UpdateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEnvironmentPathParams)
    ], UpdateEnvironmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEnvironmentHeaders)
    ], UpdateEnvironmentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEnvironmentRequestBody)
    ], UpdateEnvironmentRequest.prototype, "request", void 0);
    return UpdateEnvironmentRequest;
}(SpeakeasyBase));
export { UpdateEnvironmentRequest };
var UpdateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentResponse, _super);
    function UpdateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateEnvironmentOutput)
    ], UpdateEnvironmentResponse.prototype, "updateEnvironmentOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentResponse.prototype, "validationException", void 0);
    return UpdateEnvironmentResponse;
}(SpeakeasyBase));
export { UpdateEnvironmentResponse };
