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
var CreateCanaryHeaders = /** @class */ (function (_super) {
    __extends(CreateCanaryHeaders, _super);
    function CreateCanaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCanaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCanaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCanaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCanaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCanaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCanaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCanaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateCanaryHeaders;
}(SpeakeasyBase));
export { CreateCanaryHeaders };
// CreateCanaryRequestBodyCode
/**
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
**/
var CreateCanaryRequestBodyCode = /** @class */ (function (_super) {
    __extends(CreateCanaryRequestBodyCode, _super);
    function CreateCanaryRequestBodyCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Handler" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBodyCode.prototype, "handler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Bucket" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBodyCode.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Key" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBodyCode.prototype, "s3Key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Version" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBodyCode.prototype, "s3Version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ZipFile" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBodyCode.prototype, "zipFile", void 0);
    return CreateCanaryRequestBodyCode;
}(SpeakeasyBase));
export { CreateCanaryRequestBodyCode };
// CreateCanaryRequestBodyRunConfig
/**
 * A structure that contains input information for a canary run.
**/
var CreateCanaryRequestBodyRunConfig = /** @class */ (function (_super) {
    __extends(CreateCanaryRequestBodyRunConfig, _super);
    function CreateCanaryRequestBodyRunConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveTracing" }),
        __metadata("design:type", Boolean)
    ], CreateCanaryRequestBodyRunConfig.prototype, "activeTracing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentVariables" }),
        __metadata("design:type", Map)
    ], CreateCanaryRequestBodyRunConfig.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MemoryInMB" }),
        __metadata("design:type", Number)
    ], CreateCanaryRequestBodyRunConfig.prototype, "memoryInMb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], CreateCanaryRequestBodyRunConfig.prototype, "timeoutInSeconds", void 0);
    return CreateCanaryRequestBodyRunConfig;
}(SpeakeasyBase));
export { CreateCanaryRequestBodyRunConfig };
// CreateCanaryRequestBodySchedule
/**
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
**/
var CreateCanaryRequestBodySchedule = /** @class */ (function (_super) {
    __extends(CreateCanaryRequestBodySchedule, _super);
    function CreateCanaryRequestBodySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationInSeconds" }),
        __metadata("design:type", Number)
    ], CreateCanaryRequestBodySchedule.prototype, "durationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Expression" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBodySchedule.prototype, "expression", void 0);
    return CreateCanaryRequestBodySchedule;
}(SpeakeasyBase));
export { CreateCanaryRequestBodySchedule };
// CreateCanaryRequestBodyVpcConfig
/**
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
var CreateCanaryRequestBodyVpcConfig = /** @class */ (function (_super) {
    __extends(CreateCanaryRequestBodyVpcConfig, _super);
    function CreateCanaryRequestBodyVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateCanaryRequestBodyVpcConfig.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], CreateCanaryRequestBodyVpcConfig.prototype, "subnetIds", void 0);
    return CreateCanaryRequestBodyVpcConfig;
}(SpeakeasyBase));
export { CreateCanaryRequestBodyVpcConfig };
var CreateCanaryRequestBody = /** @class */ (function (_super) {
    __extends(CreateCanaryRequestBody, _super);
    function CreateCanaryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArtifactS3Location" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBody.prototype, "artifactS3Location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", CreateCanaryRequestBodyCode)
    ], CreateCanaryRequestBody.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBody.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureRetentionPeriodInDays" }),
        __metadata("design:type", Number)
    ], CreateCanaryRequestBody.prototype, "failureRetentionPeriodInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunConfig" }),
        __metadata("design:type", CreateCanaryRequestBodyRunConfig)
    ], CreateCanaryRequestBody.prototype, "runConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuntimeVersion" }),
        __metadata("design:type", String)
    ], CreateCanaryRequestBody.prototype, "runtimeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", CreateCanaryRequestBodySchedule)
    ], CreateCanaryRequestBody.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuccessRetentionPeriodInDays" }),
        __metadata("design:type", Number)
    ], CreateCanaryRequestBody.prototype, "successRetentionPeriodInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateCanaryRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", CreateCanaryRequestBodyVpcConfig)
    ], CreateCanaryRequestBody.prototype, "vpcConfig", void 0);
    return CreateCanaryRequestBody;
}(SpeakeasyBase));
export { CreateCanaryRequestBody };
var CreateCanaryRequest = /** @class */ (function (_super) {
    __extends(CreateCanaryRequest, _super);
    function CreateCanaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCanaryHeaders)
    ], CreateCanaryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCanaryRequestBody)
    ], CreateCanaryRequest.prototype, "request", void 0);
    return CreateCanaryRequest;
}(SpeakeasyBase));
export { CreateCanaryRequest };
var CreateCanaryResponse = /** @class */ (function (_super) {
    __extends(CreateCanaryResponse, _super);
    function CreateCanaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCanaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateCanaryResponse)
    ], CreateCanaryResponse.prototype, "createCanaryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCanaryResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCanaryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCanaryResponse.prototype, "validationException", void 0);
    return CreateCanaryResponse;
}(SpeakeasyBase));
export { CreateCanaryResponse };
