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
var CreateImportJobPathParams = /** @class */ (function (_super) {
    __extends(CreateImportJobPathParams, _super);
    function CreateImportJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], CreateImportJobPathParams.prototype, "applicationId", void 0);
    return CreateImportJobPathParams;
}(SpeakeasyBase));
export { CreateImportJobPathParams };
var CreateImportJobHeaders = /** @class */ (function (_super) {
    __extends(CreateImportJobHeaders, _super);
    function CreateImportJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateImportJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateImportJobHeaders;
}(SpeakeasyBase));
export { CreateImportJobHeaders };
// CreateImportJobRequestBodyImportJobRequest
/**
 * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
**/
var CreateImportJobRequestBodyImportJobRequest = /** @class */ (function (_super) {
    __extends(CreateImportJobRequestBodyImportJobRequest, _super);
    function CreateImportJobRequestBodyImportJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefineSegment" }),
        __metadata("design:type", Boolean)
    ], CreateImportJobRequestBodyImportJobRequest.prototype, "defineSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalId" }),
        __metadata("design:type", String)
    ], CreateImportJobRequestBodyImportJobRequest.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], CreateImportJobRequestBodyImportJobRequest.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegisterEndpoints" }),
        __metadata("design:type", Boolean)
    ], CreateImportJobRequestBodyImportJobRequest.prototype, "registerEndpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], CreateImportJobRequestBodyImportJobRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Url" }),
        __metadata("design:type", String)
    ], CreateImportJobRequestBodyImportJobRequest.prototype, "s3Url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentId" }),
        __metadata("design:type", String)
    ], CreateImportJobRequestBodyImportJobRequest.prototype, "segmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentName" }),
        __metadata("design:type", String)
    ], CreateImportJobRequestBodyImportJobRequest.prototype, "segmentName", void 0);
    return CreateImportJobRequestBodyImportJobRequest;
}(SpeakeasyBase));
export { CreateImportJobRequestBodyImportJobRequest };
var CreateImportJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateImportJobRequestBody, _super);
    function CreateImportJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportJobRequest" }),
        __metadata("design:type", CreateImportJobRequestBodyImportJobRequest)
    ], CreateImportJobRequestBody.prototype, "importJobRequest", void 0);
    return CreateImportJobRequestBody;
}(SpeakeasyBase));
export { CreateImportJobRequestBody };
var CreateImportJobRequest = /** @class */ (function (_super) {
    __extends(CreateImportJobRequest, _super);
    function CreateImportJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateImportJobPathParams)
    ], CreateImportJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateImportJobHeaders)
    ], CreateImportJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateImportJobRequestBody)
    ], CreateImportJobRequest.prototype, "request", void 0);
    return CreateImportJobRequest;
}(SpeakeasyBase));
export { CreateImportJobRequest };
var CreateImportJobResponse = /** @class */ (function (_super) {
    __extends(CreateImportJobResponse, _super);
    function CreateImportJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateImportJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateImportJobResponse)
    ], CreateImportJobResponse.prototype, "createImportJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateImportJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateImportJobResponse.prototype, "tooManyRequestsException", void 0);
    return CreateImportJobResponse;
}(SpeakeasyBase));
export { CreateImportJobResponse };
