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
var UpdateEventSourceMappingPathParams = /** @class */ (function (_super) {
    __extends(UpdateEventSourceMappingPathParams, _super);
    function UpdateEventSourceMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UUID" }),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingPathParams.prototype, "uuid", void 0);
    return UpdateEventSourceMappingPathParams;
}(SpeakeasyBase));
export { UpdateEventSourceMappingPathParams };
var UpdateEventSourceMappingHeaders = /** @class */ (function (_super) {
    __extends(UpdateEventSourceMappingHeaders, _super);
    function UpdateEventSourceMappingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateEventSourceMappingHeaders;
}(SpeakeasyBase));
export { UpdateEventSourceMappingHeaders };
// UpdateEventSourceMappingRequestBodyDestinationConfig
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
var UpdateEventSourceMappingRequestBodyDestinationConfig = /** @class */ (function (_super) {
    __extends(UpdateEventSourceMappingRequestBodyDestinationConfig, _super);
    function UpdateEventSourceMappingRequestBodyDestinationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnFailure" }),
        __metadata("design:type", shared.OnFailure)
    ], UpdateEventSourceMappingRequestBodyDestinationConfig.prototype, "onFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnSuccess" }),
        __metadata("design:type", shared.OnSuccess)
    ], UpdateEventSourceMappingRequestBodyDestinationConfig.prototype, "onSuccess", void 0);
    return UpdateEventSourceMappingRequestBodyDestinationConfig;
}(SpeakeasyBase));
export { UpdateEventSourceMappingRequestBodyDestinationConfig };
var UpdateEventSourceMappingRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEventSourceMappingRequestBody, _super);
    function UpdateEventSourceMappingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BatchSize" }),
        __metadata("design:type", Number)
    ], UpdateEventSourceMappingRequestBody.prototype, "batchSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BisectBatchOnFunctionError" }),
        __metadata("design:type", Boolean)
    ], UpdateEventSourceMappingRequestBody.prototype, "bisectBatchOnFunctionError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationConfig" }),
        __metadata("design:type", UpdateEventSourceMappingRequestBodyDestinationConfig)
    ], UpdateEventSourceMappingRequestBody.prototype, "destinationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateEventSourceMappingRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FunctionName" }),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingRequestBody.prototype, "functionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FunctionResponseTypes" }),
        __metadata("design:type", Array)
    ], UpdateEventSourceMappingRequestBody.prototype, "functionResponseTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumBatchingWindowInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateEventSourceMappingRequestBody.prototype, "maximumBatchingWindowInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumRecordAgeInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateEventSourceMappingRequestBody.prototype, "maximumRecordAgeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" }),
        __metadata("design:type", Number)
    ], UpdateEventSourceMappingRequestBody.prototype, "maximumRetryAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParallelizationFactor" }),
        __metadata("design:type", Number)
    ], UpdateEventSourceMappingRequestBody.prototype, "parallelizationFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceAccessConfigurations", elemType: shared.SourceAccessConfiguration }),
        __metadata("design:type", Array)
    ], UpdateEventSourceMappingRequestBody.prototype, "sourceAccessConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TumblingWindowInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateEventSourceMappingRequestBody.prototype, "tumblingWindowInSeconds", void 0);
    return UpdateEventSourceMappingRequestBody;
}(SpeakeasyBase));
export { UpdateEventSourceMappingRequestBody };
var UpdateEventSourceMappingRequest = /** @class */ (function (_super) {
    __extends(UpdateEventSourceMappingRequest, _super);
    function UpdateEventSourceMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEventSourceMappingPathParams)
    ], UpdateEventSourceMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEventSourceMappingHeaders)
    ], UpdateEventSourceMappingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEventSourceMappingRequestBody)
    ], UpdateEventSourceMappingRequest.prototype, "request", void 0);
    return UpdateEventSourceMappingRequest;
}(SpeakeasyBase));
export { UpdateEventSourceMappingRequest };
var UpdateEventSourceMappingResponse = /** @class */ (function (_super) {
    __extends(UpdateEventSourceMappingResponse, _super);
    function UpdateEventSourceMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateEventSourceMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventSourceMappingConfiguration)
    ], UpdateEventSourceMappingResponse.prototype, "eventSourceMappingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEventSourceMappingResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEventSourceMappingResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEventSourceMappingResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEventSourceMappingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEventSourceMappingResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateEventSourceMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEventSourceMappingResponse.prototype, "tooManyRequestsException", void 0);
    return UpdateEventSourceMappingResponse;
}(SpeakeasyBase));
export { UpdateEventSourceMappingResponse };
