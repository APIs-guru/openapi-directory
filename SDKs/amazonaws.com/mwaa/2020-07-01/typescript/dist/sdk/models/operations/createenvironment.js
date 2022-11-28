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
var CreateEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(CreateEnvironmentPathParams, _super);
    function CreateEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Name" }),
        __metadata("design:type", String)
    ], CreateEnvironmentPathParams.prototype, "name", void 0);
    return CreateEnvironmentPathParams;
}(SpeakeasyBase));
export { CreateEnvironmentPathParams };
var CreateEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(CreateEnvironmentHeaders, _super);
    function CreateEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateEnvironmentHeaders;
}(SpeakeasyBase));
export { CreateEnvironmentHeaders };
// CreateEnvironmentRequestBodyLoggingConfiguration
/**
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
var CreateEnvironmentRequestBodyLoggingConfiguration = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequestBodyLoggingConfiguration, _super);
    function CreateEnvironmentRequestBodyLoggingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DagProcessingLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], CreateEnvironmentRequestBodyLoggingConfiguration.prototype, "dagProcessingLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchedulerLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], CreateEnvironmentRequestBodyLoggingConfiguration.prototype, "schedulerLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], CreateEnvironmentRequestBodyLoggingConfiguration.prototype, "taskLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebserverLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], CreateEnvironmentRequestBodyLoggingConfiguration.prototype, "webserverLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkerLogs" }),
        __metadata("design:type", shared.ModuleLoggingConfigurationInput)
    ], CreateEnvironmentRequestBodyLoggingConfiguration.prototype, "workerLogs", void 0);
    return CreateEnvironmentRequestBodyLoggingConfiguration;
}(SpeakeasyBase));
export { CreateEnvironmentRequestBodyLoggingConfiguration };
// CreateEnvironmentRequestBodyNetworkConfiguration
/**
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
**/
var CreateEnvironmentRequestBodyNetworkConfiguration = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequestBodyNetworkConfiguration, _super);
    function CreateEnvironmentRequestBodyNetworkConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateEnvironmentRequestBodyNetworkConfiguration.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], CreateEnvironmentRequestBodyNetworkConfiguration.prototype, "subnetIds", void 0);
    return CreateEnvironmentRequestBodyNetworkConfiguration;
}(SpeakeasyBase));
export { CreateEnvironmentRequestBodyNetworkConfiguration };
export var CreateEnvironmentRequestBodyWebserverAccessModeEnum;
(function (CreateEnvironmentRequestBodyWebserverAccessModeEnum) {
    CreateEnvironmentRequestBodyWebserverAccessModeEnum["PrivateOnly"] = "PRIVATE_ONLY";
    CreateEnvironmentRequestBodyWebserverAccessModeEnum["PublicOnly"] = "PUBLIC_ONLY";
})(CreateEnvironmentRequestBodyWebserverAccessModeEnum || (CreateEnvironmentRequestBodyWebserverAccessModeEnum = {}));
var CreateEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequestBody, _super);
    function CreateEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirflowConfigurationOptions" }),
        __metadata("design:type", Map)
    ], CreateEnvironmentRequestBody.prototype, "airflowConfigurationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirflowVersion" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "airflowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DagS3Path" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "dagS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentClass" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "environmentClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKey" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "kmsKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" }),
        __metadata("design:type", CreateEnvironmentRequestBodyLoggingConfiguration)
    ], CreateEnvironmentRequestBody.prototype, "loggingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxWorkers" }),
        __metadata("design:type", Number)
    ], CreateEnvironmentRequestBody.prototype, "maxWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinWorkers" }),
        __metadata("design:type", Number)
    ], CreateEnvironmentRequestBody.prototype, "minWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfiguration" }),
        __metadata("design:type", CreateEnvironmentRequestBodyNetworkConfiguration)
    ], CreateEnvironmentRequestBody.prototype, "networkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PluginsS3ObjectVersion" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "pluginsS3ObjectVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PluginsS3Path" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "pluginsS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequirementsS3ObjectVersion" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "requirementsS3ObjectVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequirementsS3Path" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "requirementsS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedulers" }),
        __metadata("design:type", Number)
    ], CreateEnvironmentRequestBody.prototype, "schedulers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceBucketArn" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "sourceBucketArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateEnvironmentRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebserverAccessMode" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "webserverAccessMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceWindowStart" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBody.prototype, "weeklyMaintenanceWindowStart", void 0);
    return CreateEnvironmentRequestBody;
}(SpeakeasyBase));
export { CreateEnvironmentRequestBody };
var CreateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequest, _super);
    function CreateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnvironmentPathParams)
    ], CreateEnvironmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnvironmentHeaders)
    ], CreateEnvironmentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEnvironmentRequestBody)
    ], CreateEnvironmentRequest.prototype, "request", void 0);
    return CreateEnvironmentRequest;
}(SpeakeasyBase));
export { CreateEnvironmentRequest };
var CreateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(CreateEnvironmentResponse, _super);
    function CreateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateEnvironmentOutput)
    ], CreateEnvironmentResponse.prototype, "createEnvironmentOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEnvironmentResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEnvironmentResponse.prototype, "validationException", void 0);
    return CreateEnvironmentResponse;
}(SpeakeasyBase));
export { CreateEnvironmentResponse };
