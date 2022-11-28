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
var CreateExportJobPathParams = /** @class */ (function (_super) {
    __extends(CreateExportJobPathParams, _super);
    function CreateExportJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], CreateExportJobPathParams.prototype, "applicationId", void 0);
    return CreateExportJobPathParams;
}(SpeakeasyBase));
export { CreateExportJobPathParams };
var CreateExportJobHeaders = /** @class */ (function (_super) {
    __extends(CreateExportJobHeaders, _super);
    function CreateExportJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateExportJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateExportJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateExportJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateExportJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateExportJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateExportJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateExportJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateExportJobHeaders;
}(SpeakeasyBase));
export { CreateExportJobHeaders };
// CreateExportJobRequestBodyExportJobRequest
/**
 * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
**/
var CreateExportJobRequestBodyExportJobRequest = /** @class */ (function (_super) {
    __extends(CreateExportJobRequestBodyExportJobRequest, _super);
    function CreateExportJobRequestBodyExportJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], CreateExportJobRequestBodyExportJobRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3UrlPrefix" }),
        __metadata("design:type", String)
    ], CreateExportJobRequestBodyExportJobRequest.prototype, "s3UrlPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentId" }),
        __metadata("design:type", String)
    ], CreateExportJobRequestBodyExportJobRequest.prototype, "segmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentVersion" }),
        __metadata("design:type", Number)
    ], CreateExportJobRequestBodyExportJobRequest.prototype, "segmentVersion", void 0);
    return CreateExportJobRequestBodyExportJobRequest;
}(SpeakeasyBase));
export { CreateExportJobRequestBodyExportJobRequest };
var CreateExportJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateExportJobRequestBody, _super);
    function CreateExportJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportJobRequest" }),
        __metadata("design:type", CreateExportJobRequestBodyExportJobRequest)
    ], CreateExportJobRequestBody.prototype, "exportJobRequest", void 0);
    return CreateExportJobRequestBody;
}(SpeakeasyBase));
export { CreateExportJobRequestBody };
var CreateExportJobRequest = /** @class */ (function (_super) {
    __extends(CreateExportJobRequest, _super);
    function CreateExportJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateExportJobPathParams)
    ], CreateExportJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateExportJobHeaders)
    ], CreateExportJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateExportJobRequestBody)
    ], CreateExportJobRequest.prototype, "request", void 0);
    return CreateExportJobRequest;
}(SpeakeasyBase));
export { CreateExportJobRequest };
var CreateExportJobResponse = /** @class */ (function (_super) {
    __extends(CreateExportJobResponse, _super);
    function CreateExportJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportJobResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateExportJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateExportJobResponse)
    ], CreateExportJobResponse.prototype, "createExportJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportJobResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportJobResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportJobResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportJobResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportJobResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateExportJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportJobResponse.prototype, "tooManyRequestsException", void 0);
    return CreateExportJobResponse;
}(SpeakeasyBase));
export { CreateExportJobResponse };
