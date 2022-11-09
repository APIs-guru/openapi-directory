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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CreateEventSourceMappingHeaders = /** @class */ (function (_super) {
    __extends(CreateEventSourceMappingHeaders, _super);
    function CreateEventSourceMappingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateEventSourceMappingHeaders;
}(SpeakeasyBase));
export { CreateEventSourceMappingHeaders };
// CreateEventSourceMappingRequestBodyDestinationConfig
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
var CreateEventSourceMappingRequestBodyDestinationConfig = /** @class */ (function (_super) {
    __extends(CreateEventSourceMappingRequestBodyDestinationConfig, _super);
    function CreateEventSourceMappingRequestBodyDestinationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=OnFailure" }),
        __metadata("design:type", shared.OnFailure)
    ], CreateEventSourceMappingRequestBodyDestinationConfig.prototype, "onFailure", void 0);
    __decorate([
        Metadata({ data: "json, name=OnSuccess" }),
        __metadata("design:type", shared.OnSuccess)
    ], CreateEventSourceMappingRequestBodyDestinationConfig.prototype, "onSuccess", void 0);
    return CreateEventSourceMappingRequestBodyDestinationConfig;
}(SpeakeasyBase));
export { CreateEventSourceMappingRequestBodyDestinationConfig };
// CreateEventSourceMappingRequestBodySelfManagedEventSource
/**
 * The self-managed Apache Kafka cluster for your event source.
**/
var CreateEventSourceMappingRequestBodySelfManagedEventSource = /** @class */ (function (_super) {
    __extends(CreateEventSourceMappingRequestBodySelfManagedEventSource, _super);
    function CreateEventSourceMappingRequestBodySelfManagedEventSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Endpoints" }),
        __metadata("design:type", Map)
    ], CreateEventSourceMappingRequestBodySelfManagedEventSource.prototype, "endpoints", void 0);
    return CreateEventSourceMappingRequestBodySelfManagedEventSource;
}(SpeakeasyBase));
export { CreateEventSourceMappingRequestBodySelfManagedEventSource };
export var CreateEventSourceMappingRequestBodyStartingPositionEnum;
(function (CreateEventSourceMappingRequestBodyStartingPositionEnum) {
    CreateEventSourceMappingRequestBodyStartingPositionEnum["TrimHorizon"] = "TRIM_HORIZON";
    CreateEventSourceMappingRequestBodyStartingPositionEnum["Latest"] = "LATEST";
    CreateEventSourceMappingRequestBodyStartingPositionEnum["AtTimestamp"] = "AT_TIMESTAMP";
})(CreateEventSourceMappingRequestBodyStartingPositionEnum || (CreateEventSourceMappingRequestBodyStartingPositionEnum = {}));
var CreateEventSourceMappingRequestBody = /** @class */ (function (_super) {
    __extends(CreateEventSourceMappingRequestBody, _super);
    function CreateEventSourceMappingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=BatchSize" }),
        __metadata("design:type", Number)
    ], CreateEventSourceMappingRequestBody.prototype, "batchSize", void 0);
    __decorate([
        Metadata({ data: "json, name=BisectBatchOnFunctionError" }),
        __metadata("design:type", Boolean)
    ], CreateEventSourceMappingRequestBody.prototype, "bisectBatchOnFunctionError", void 0);
    __decorate([
        Metadata({ data: "json, name=DestinationConfig" }),
        __metadata("design:type", CreateEventSourceMappingRequestBodyDestinationConfig)
    ], CreateEventSourceMappingRequestBody.prototype, "destinationConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], CreateEventSourceMappingRequestBody.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "json, name=EventSourceArn" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingRequestBody.prototype, "eventSourceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=FunctionName" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingRequestBody.prototype, "functionName", void 0);
    __decorate([
        Metadata({ data: "json, name=FunctionResponseTypes" }),
        __metadata("design:type", Array)
    ], CreateEventSourceMappingRequestBody.prototype, "functionResponseTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=MaximumBatchingWindowInSeconds" }),
        __metadata("design:type", Number)
    ], CreateEventSourceMappingRequestBody.prototype, "maximumBatchingWindowInSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=MaximumRecordAgeInSeconds" }),
        __metadata("design:type", Number)
    ], CreateEventSourceMappingRequestBody.prototype, "maximumRecordAgeInSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=MaximumRetryAttempts" }),
        __metadata("design:type", Number)
    ], CreateEventSourceMappingRequestBody.prototype, "maximumRetryAttempts", void 0);
    __decorate([
        Metadata({ data: "json, name=ParallelizationFactor" }),
        __metadata("design:type", Number)
    ], CreateEventSourceMappingRequestBody.prototype, "parallelizationFactor", void 0);
    __decorate([
        Metadata({ data: "json, name=Queues" }),
        __metadata("design:type", Array)
    ], CreateEventSourceMappingRequestBody.prototype, "queues", void 0);
    __decorate([
        Metadata({ data: "json, name=SelfManagedEventSource" }),
        __metadata("design:type", CreateEventSourceMappingRequestBodySelfManagedEventSource)
    ], CreateEventSourceMappingRequestBody.prototype, "selfManagedEventSource", void 0);
    __decorate([
        Metadata({ data: "json, name=SourceAccessConfigurations", elemType: shared.SourceAccessConfiguration }),
        __metadata("design:type", Array)
    ], CreateEventSourceMappingRequestBody.prototype, "sourceAccessConfigurations", void 0);
    __decorate([
        Metadata({ data: "json, name=StartingPosition" }),
        __metadata("design:type", String)
    ], CreateEventSourceMappingRequestBody.prototype, "startingPosition", void 0);
    __decorate([
        Metadata({ data: "json, name=StartingPositionTimestamp" }),
        __metadata("design:type", Date)
    ], CreateEventSourceMappingRequestBody.prototype, "startingPositionTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=Topics" }),
        __metadata("design:type", Array)
    ], CreateEventSourceMappingRequestBody.prototype, "topics", void 0);
    __decorate([
        Metadata({ data: "json, name=TumblingWindowInSeconds" }),
        __metadata("design:type", Number)
    ], CreateEventSourceMappingRequestBody.prototype, "tumblingWindowInSeconds", void 0);
    return CreateEventSourceMappingRequestBody;
}(SpeakeasyBase));
export { CreateEventSourceMappingRequestBody };
var CreateEventSourceMappingRequest = /** @class */ (function (_super) {
    __extends(CreateEventSourceMappingRequest, _super);
    function CreateEventSourceMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateEventSourceMappingHeaders)
    ], CreateEventSourceMappingRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEventSourceMappingRequestBody)
    ], CreateEventSourceMappingRequest.prototype, "request", void 0);
    return CreateEventSourceMappingRequest;
}(SpeakeasyBase));
export { CreateEventSourceMappingRequest };
var CreateEventSourceMappingResponse = /** @class */ (function (_super) {
    __extends(CreateEventSourceMappingResponse, _super);
    function CreateEventSourceMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateEventSourceMappingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EventSourceMappingConfiguration)
    ], CreateEventSourceMappingResponse.prototype, "eventSourceMappingConfiguration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEventSourceMappingResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEventSourceMappingResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEventSourceMappingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEventSourceMappingResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateEventSourceMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEventSourceMappingResponse.prototype, "tooManyRequestsException", void 0);
    return CreateEventSourceMappingResponse;
}(SpeakeasyBase));
export { CreateEventSourceMappingResponse };
