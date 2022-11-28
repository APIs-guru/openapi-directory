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
var CreateSimulationJobHeaders = /** @class */ (function (_super) {
    __extends(CreateSimulationJobHeaders, _super);
    function CreateSimulationJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSimulationJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSimulationJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSimulationJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSimulationJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSimulationJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSimulationJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSimulationJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSimulationJobHeaders;
}(SpeakeasyBase));
export { CreateSimulationJobHeaders };
// CreateSimulationJobRequestBodyCompute
/**
 * Compute information for the simulation job.
**/
var CreateSimulationJobRequestBodyCompute = /** @class */ (function (_super) {
    __extends(CreateSimulationJobRequestBodyCompute, _super);
    function CreateSimulationJobRequestBodyCompute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simulationUnitLimit" }),
        __metadata("design:type", Number)
    ], CreateSimulationJobRequestBodyCompute.prototype, "simulationUnitLimit", void 0);
    return CreateSimulationJobRequestBodyCompute;
}(SpeakeasyBase));
export { CreateSimulationJobRequestBodyCompute };
export var CreateSimulationJobRequestBodyFailureBehaviorEnum;
(function (CreateSimulationJobRequestBodyFailureBehaviorEnum) {
    CreateSimulationJobRequestBodyFailureBehaviorEnum["Fail"] = "Fail";
    CreateSimulationJobRequestBodyFailureBehaviorEnum["Continue"] = "Continue";
})(CreateSimulationJobRequestBodyFailureBehaviorEnum || (CreateSimulationJobRequestBodyFailureBehaviorEnum = {}));
// CreateSimulationJobRequestBodyLoggingConfig
/**
 * The logging configuration.
**/
var CreateSimulationJobRequestBodyLoggingConfig = /** @class */ (function (_super) {
    __extends(CreateSimulationJobRequestBodyLoggingConfig, _super);
    function CreateSimulationJobRequestBodyLoggingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordAllRosTopics" }),
        __metadata("design:type", Boolean)
    ], CreateSimulationJobRequestBodyLoggingConfig.prototype, "recordAllRosTopics", void 0);
    return CreateSimulationJobRequestBodyLoggingConfig;
}(SpeakeasyBase));
export { CreateSimulationJobRequestBodyLoggingConfig };
// CreateSimulationJobRequestBodyOutputLocation
/**
 * The output location.
**/
var CreateSimulationJobRequestBodyOutputLocation = /** @class */ (function (_super) {
    __extends(CreateSimulationJobRequestBodyOutputLocation, _super);
    function CreateSimulationJobRequestBodyOutputLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Bucket" }),
        __metadata("design:type", String)
    ], CreateSimulationJobRequestBodyOutputLocation.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Prefix" }),
        __metadata("design:type", String)
    ], CreateSimulationJobRequestBodyOutputLocation.prototype, "s3Prefix", void 0);
    return CreateSimulationJobRequestBodyOutputLocation;
}(SpeakeasyBase));
export { CreateSimulationJobRequestBodyOutputLocation };
// CreateSimulationJobRequestBodyVpcConfig
/**
 * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
**/
var CreateSimulationJobRequestBodyVpcConfig = /** @class */ (function (_super) {
    __extends(CreateSimulationJobRequestBodyVpcConfig, _super);
    function CreateSimulationJobRequestBodyVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignPublicIp" }),
        __metadata("design:type", Boolean)
    ], CreateSimulationJobRequestBodyVpcConfig.prototype, "assignPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityGroups" }),
        __metadata("design:type", Array)
    ], CreateSimulationJobRequestBodyVpcConfig.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnets" }),
        __metadata("design:type", Array)
    ], CreateSimulationJobRequestBodyVpcConfig.prototype, "subnets", void 0);
    return CreateSimulationJobRequestBodyVpcConfig;
}(SpeakeasyBase));
export { CreateSimulationJobRequestBodyVpcConfig };
var CreateSimulationJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateSimulationJobRequestBody, _super);
    function CreateSimulationJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateSimulationJobRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compute" }),
        __metadata("design:type", CreateSimulationJobRequestBodyCompute)
    ], CreateSimulationJobRequestBody.prototype, "compute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSources", elemType: shared.DataSourceConfig }),
        __metadata("design:type", Array)
    ], CreateSimulationJobRequestBody.prototype, "dataSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureBehavior" }),
        __metadata("design:type", String)
    ], CreateSimulationJobRequestBody.prototype, "failureBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamRole" }),
        __metadata("design:type", String)
    ], CreateSimulationJobRequestBody.prototype, "iamRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", CreateSimulationJobRequestBodyLoggingConfig)
    ], CreateSimulationJobRequestBody.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxJobDurationInSeconds" }),
        __metadata("design:type", Number)
    ], CreateSimulationJobRequestBody.prototype, "maxJobDurationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputLocation" }),
        __metadata("design:type", CreateSimulationJobRequestBodyOutputLocation)
    ], CreateSimulationJobRequestBody.prototype, "outputLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=robotApplications", elemType: shared.RobotApplicationConfig }),
        __metadata("design:type", Array)
    ], CreateSimulationJobRequestBody.prototype, "robotApplications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simulationApplications", elemType: shared.SimulationApplicationConfig }),
        __metadata("design:type", Array)
    ], CreateSimulationJobRequestBody.prototype, "simulationApplications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateSimulationJobRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConfig" }),
        __metadata("design:type", CreateSimulationJobRequestBodyVpcConfig)
    ], CreateSimulationJobRequestBody.prototype, "vpcConfig", void 0);
    return CreateSimulationJobRequestBody;
}(SpeakeasyBase));
export { CreateSimulationJobRequestBody };
var CreateSimulationJobRequest = /** @class */ (function (_super) {
    __extends(CreateSimulationJobRequest, _super);
    function CreateSimulationJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSimulationJobHeaders)
    ], CreateSimulationJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSimulationJobRequestBody)
    ], CreateSimulationJobRequest.prototype, "request", void 0);
    return CreateSimulationJobRequest;
}(SpeakeasyBase));
export { CreateSimulationJobRequest };
var CreateSimulationJobResponse = /** @class */ (function (_super) {
    __extends(CreateSimulationJobResponse, _super);
    function CreateSimulationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSimulationJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSimulationJobResponse)
    ], CreateSimulationJobResponse.prototype, "createSimulationJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSimulationJobResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSimulationJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSimulationJobResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSimulationJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSimulationJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSimulationJobResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSimulationJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSimulationJobResponse.prototype, "throttlingException", void 0);
    return CreateSimulationJobResponse;
}(SpeakeasyBase));
export { CreateSimulationJobResponse };
