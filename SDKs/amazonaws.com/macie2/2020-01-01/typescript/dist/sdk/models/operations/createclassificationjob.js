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
var CreateClassificationJobHeaders = /** @class */ (function (_super) {
    __extends(CreateClassificationJobHeaders, _super);
    function CreateClassificationJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateClassificationJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateClassificationJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateClassificationJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateClassificationJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateClassificationJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateClassificationJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateClassificationJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateClassificationJobHeaders;
}(SpeakeasyBase));
export { CreateClassificationJobHeaders };
export var CreateClassificationJobRequestBodyJobTypeEnum;
(function (CreateClassificationJobRequestBodyJobTypeEnum) {
    CreateClassificationJobRequestBodyJobTypeEnum["OneTime"] = "ONE_TIME";
    CreateClassificationJobRequestBodyJobTypeEnum["Scheduled"] = "SCHEDULED";
})(CreateClassificationJobRequestBodyJobTypeEnum || (CreateClassificationJobRequestBodyJobTypeEnum = {}));
export var CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum;
(function (CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum) {
    CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum["All"] = "ALL";
    CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum["Exclude"] = "EXCLUDE";
    CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum["Include"] = "INCLUDE";
    CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum["None"] = "NONE";
})(CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum || (CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum = {}));
// CreateClassificationJobRequestBodyS3JobDefinition
/**
 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
**/
var CreateClassificationJobRequestBodyS3JobDefinition = /** @class */ (function (_super) {
    __extends(CreateClassificationJobRequestBodyS3JobDefinition, _super);
    function CreateClassificationJobRequestBodyS3JobDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketCriteria" }),
        __metadata("design:type", shared.S3BucketCriteriaForJob)
    ], CreateClassificationJobRequestBodyS3JobDefinition.prototype, "bucketCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketDefinitions", elemType: shared.S3BucketDefinitionForJob }),
        __metadata("design:type", Array)
    ], CreateClassificationJobRequestBodyS3JobDefinition.prototype, "bucketDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scoping" }),
        __metadata("design:type", shared.Scoping)
    ], CreateClassificationJobRequestBodyS3JobDefinition.prototype, "scoping", void 0);
    return CreateClassificationJobRequestBodyS3JobDefinition;
}(SpeakeasyBase));
export { CreateClassificationJobRequestBodyS3JobDefinition };
// CreateClassificationJobRequestBodyScheduleFrequency
/**
 * Specifies the recurrence pattern for running a classification job.
**/
var CreateClassificationJobRequestBodyScheduleFrequency = /** @class */ (function (_super) {
    __extends(CreateClassificationJobRequestBodyScheduleFrequency, _super);
    function CreateClassificationJobRequestBodyScheduleFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailySchedule" }),
        __metadata("design:type", Map)
    ], CreateClassificationJobRequestBodyScheduleFrequency.prototype, "dailySchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthlySchedule" }),
        __metadata("design:type", shared.MonthlySchedule)
    ], CreateClassificationJobRequestBodyScheduleFrequency.prototype, "monthlySchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weeklySchedule" }),
        __metadata("design:type", shared.WeeklySchedule)
    ], CreateClassificationJobRequestBodyScheduleFrequency.prototype, "weeklySchedule", void 0);
    return CreateClassificationJobRequestBodyScheduleFrequency;
}(SpeakeasyBase));
export { CreateClassificationJobRequestBodyScheduleFrequency };
var CreateClassificationJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateClassificationJobRequestBody, _super);
    function CreateClassificationJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateClassificationJobRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDataIdentifierIds" }),
        __metadata("design:type", Array)
    ], CreateClassificationJobRequestBody.prototype, "customDataIdentifierIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateClassificationJobRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialRun" }),
        __metadata("design:type", Boolean)
    ], CreateClassificationJobRequestBody.prototype, "initialRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobType" }),
        __metadata("design:type", String)
    ], CreateClassificationJobRequestBody.prototype, "jobType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedDataIdentifierIds" }),
        __metadata("design:type", Array)
    ], CreateClassificationJobRequestBody.prototype, "managedDataIdentifierIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedDataIdentifierSelector" }),
        __metadata("design:type", String)
    ], CreateClassificationJobRequestBody.prototype, "managedDataIdentifierSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateClassificationJobRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3JobDefinition" }),
        __metadata("design:type", CreateClassificationJobRequestBodyS3JobDefinition)
    ], CreateClassificationJobRequestBody.prototype, "s3JobDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samplingPercentage" }),
        __metadata("design:type", Number)
    ], CreateClassificationJobRequestBody.prototype, "samplingPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleFrequency" }),
        __metadata("design:type", CreateClassificationJobRequestBodyScheduleFrequency)
    ], CreateClassificationJobRequestBody.prototype, "scheduleFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateClassificationJobRequestBody.prototype, "tags", void 0);
    return CreateClassificationJobRequestBody;
}(SpeakeasyBase));
export { CreateClassificationJobRequestBody };
var CreateClassificationJobRequest = /** @class */ (function (_super) {
    __extends(CreateClassificationJobRequest, _super);
    function CreateClassificationJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateClassificationJobHeaders)
    ], CreateClassificationJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateClassificationJobRequestBody)
    ], CreateClassificationJobRequest.prototype, "request", void 0);
    return CreateClassificationJobRequest;
}(SpeakeasyBase));
export { CreateClassificationJobRequest };
var CreateClassificationJobResponse = /** @class */ (function (_super) {
    __extends(CreateClassificationJobResponse, _super);
    function CreateClassificationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateClassificationJobResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateClassificationJobResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateClassificationJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateClassificationJobResponse)
    ], CreateClassificationJobResponse.prototype, "createClassificationJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateClassificationJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateClassificationJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateClassificationJobResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateClassificationJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateClassificationJobResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateClassificationJobResponse.prototype, "validationException", void 0);
    return CreateClassificationJobResponse;
}(SpeakeasyBase));
export { CreateClassificationJobResponse };
