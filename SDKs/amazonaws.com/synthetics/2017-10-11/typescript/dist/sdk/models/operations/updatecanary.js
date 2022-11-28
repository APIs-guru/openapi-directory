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
var UpdateCanaryPathParams = /** @class */ (function (_super) {
    __extends(UpdateCanaryPathParams, _super);
    function UpdateCanaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], UpdateCanaryPathParams.prototype, "name", void 0);
    return UpdateCanaryPathParams;
}(SpeakeasyBase));
export { UpdateCanaryPathParams };
var UpdateCanaryHeaders = /** @class */ (function (_super) {
    __extends(UpdateCanaryHeaders, _super);
    function UpdateCanaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateCanaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateCanaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateCanaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateCanaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateCanaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateCanaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateCanaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateCanaryHeaders;
}(SpeakeasyBase));
export { UpdateCanaryHeaders };
// UpdateCanaryRequestBodyCode
/**
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
**/
var UpdateCanaryRequestBodyCode = /** @class */ (function (_super) {
    __extends(UpdateCanaryRequestBodyCode, _super);
    function UpdateCanaryRequestBodyCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Handler" }),
        __metadata("design:type", String)
    ], UpdateCanaryRequestBodyCode.prototype, "handler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Bucket" }),
        __metadata("design:type", String)
    ], UpdateCanaryRequestBodyCode.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Key" }),
        __metadata("design:type", String)
    ], UpdateCanaryRequestBodyCode.prototype, "s3Key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Version" }),
        __metadata("design:type", String)
    ], UpdateCanaryRequestBodyCode.prototype, "s3Version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ZipFile" }),
        __metadata("design:type", String)
    ], UpdateCanaryRequestBodyCode.prototype, "zipFile", void 0);
    return UpdateCanaryRequestBodyCode;
}(SpeakeasyBase));
export { UpdateCanaryRequestBodyCode };
// UpdateCanaryRequestBodyRunConfig
/**
 * A structure that contains input information for a canary run.
**/
var UpdateCanaryRequestBodyRunConfig = /** @class */ (function (_super) {
    __extends(UpdateCanaryRequestBodyRunConfig, _super);
    function UpdateCanaryRequestBodyRunConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveTracing" }),
        __metadata("design:type", Boolean)
    ], UpdateCanaryRequestBodyRunConfig.prototype, "activeTracing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentVariables" }),
        __metadata("design:type", Map)
    ], UpdateCanaryRequestBodyRunConfig.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MemoryInMB" }),
        __metadata("design:type", Number)
    ], UpdateCanaryRequestBodyRunConfig.prototype, "memoryInMb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateCanaryRequestBodyRunConfig.prototype, "timeoutInSeconds", void 0);
    return UpdateCanaryRequestBodyRunConfig;
}(SpeakeasyBase));
export { UpdateCanaryRequestBodyRunConfig };
// UpdateCanaryRequestBodySchedule
/**
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
**/
var UpdateCanaryRequestBodySchedule = /** @class */ (function (_super) {
    __extends(UpdateCanaryRequestBodySchedule, _super);
    function UpdateCanaryRequestBodySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateCanaryRequestBodySchedule.prototype, "durationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Expression" }),
        __metadata("design:type", String)
    ], UpdateCanaryRequestBodySchedule.prototype, "expression", void 0);
    return UpdateCanaryRequestBodySchedule;
}(SpeakeasyBase));
export { UpdateCanaryRequestBodySchedule };
// UpdateCanaryRequestBodyVisualReference
/**
 * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary, and optionally the parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>
**/
var UpdateCanaryRequestBodyVisualReference = /** @class */ (function (_super) {
    __extends(UpdateCanaryRequestBodyVisualReference, _super);
    function UpdateCanaryRequestBodyVisualReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BaseCanaryRunId" }),
        __metadata("design:type", String)
    ], UpdateCanaryRequestBodyVisualReference.prototype, "baseCanaryRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BaseScreenshots", elemType: shared.BaseScreenshot }),
        __metadata("design:type", Array)
    ], UpdateCanaryRequestBodyVisualReference.prototype, "baseScreenshots", void 0);
    return UpdateCanaryRequestBodyVisualReference;
}(SpeakeasyBase));
export { UpdateCanaryRequestBodyVisualReference };
// UpdateCanaryRequestBodyVpcConfig
/**
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
var UpdateCanaryRequestBodyVpcConfig = /** @class */ (function (_super) {
    __extends(UpdateCanaryRequestBodyVpcConfig, _super);
    function UpdateCanaryRequestBodyVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateCanaryRequestBodyVpcConfig.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], UpdateCanaryRequestBodyVpcConfig.prototype, "subnetIds", void 0);
    return UpdateCanaryRequestBodyVpcConfig;
}(SpeakeasyBase));
export { UpdateCanaryRequestBodyVpcConfig };
var UpdateCanaryRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCanaryRequestBody, _super);
    function UpdateCanaryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", UpdateCanaryRequestBodyCode)
    ], UpdateCanaryRequestBody.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], UpdateCanaryRequestBody.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureRetentionPeriodInDays" }),
        __metadata("design:type", Number)
    ], UpdateCanaryRequestBody.prototype, "failureRetentionPeriodInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunConfig" }),
        __metadata("design:type", UpdateCanaryRequestBodyRunConfig)
    ], UpdateCanaryRequestBody.prototype, "runConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuntimeVersion" }),
        __metadata("design:type", String)
    ], UpdateCanaryRequestBody.prototype, "runtimeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", UpdateCanaryRequestBodySchedule)
    ], UpdateCanaryRequestBody.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuccessRetentionPeriodInDays" }),
        __metadata("design:type", Number)
    ], UpdateCanaryRequestBody.prototype, "successRetentionPeriodInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VisualReference" }),
        __metadata("design:type", UpdateCanaryRequestBodyVisualReference)
    ], UpdateCanaryRequestBody.prototype, "visualReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", UpdateCanaryRequestBodyVpcConfig)
    ], UpdateCanaryRequestBody.prototype, "vpcConfig", void 0);
    return UpdateCanaryRequestBody;
}(SpeakeasyBase));
export { UpdateCanaryRequestBody };
var UpdateCanaryRequest = /** @class */ (function (_super) {
    __extends(UpdateCanaryRequest, _super);
    function UpdateCanaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCanaryPathParams)
    ], UpdateCanaryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCanaryHeaders)
    ], UpdateCanaryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCanaryRequestBody)
    ], UpdateCanaryRequest.prototype, "request", void 0);
    return UpdateCanaryRequest;
}(SpeakeasyBase));
export { UpdateCanaryRequest };
var UpdateCanaryResponse = /** @class */ (function (_super) {
    __extends(UpdateCanaryResponse, _super);
    function UpdateCanaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCanaryResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCanaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCanaryResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCanaryResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCanaryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateCanaryResponse.prototype, "updateCanaryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCanaryResponse.prototype, "validationException", void 0);
    return UpdateCanaryResponse;
}(SpeakeasyBase));
export { UpdateCanaryResponse };
