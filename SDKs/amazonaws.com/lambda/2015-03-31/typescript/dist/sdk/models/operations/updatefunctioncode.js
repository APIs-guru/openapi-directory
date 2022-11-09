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
var UpdateFunctionCodePathParams = /** @class */ (function (_super) {
    __extends(UpdateFunctionCodePathParams, _super);
    function UpdateFunctionCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodePathParams.prototype, "functionName", void 0);
    return UpdateFunctionCodePathParams;
}(SpeakeasyBase));
export { UpdateFunctionCodePathParams };
var UpdateFunctionCodeHeaders = /** @class */ (function (_super) {
    __extends(UpdateFunctionCodeHeaders, _super);
    function UpdateFunctionCodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFunctionCodeHeaders;
}(SpeakeasyBase));
export { UpdateFunctionCodeHeaders };
var UpdateFunctionCodeRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFunctionCodeRequestBody, _super);
    function UpdateFunctionCodeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DryRun" }),
        __metadata("design:type", Boolean)
    ], UpdateFunctionCodeRequestBody.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "json, name=ImageUri" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeRequestBody.prototype, "imageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=Publish" }),
        __metadata("design:type", Boolean)
    ], UpdateFunctionCodeRequestBody.prototype, "publish", void 0);
    __decorate([
        Metadata({ data: "json, name=RevisionId" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeRequestBody.prototype, "revisionId", void 0);
    __decorate([
        Metadata({ data: "json, name=S3Bucket" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeRequestBody.prototype, "s3Bucket", void 0);
    __decorate([
        Metadata({ data: "json, name=S3Key" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeRequestBody.prototype, "s3Key", void 0);
    __decorate([
        Metadata({ data: "json, name=S3ObjectVersion" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeRequestBody.prototype, "s3ObjectVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=ZipFile" }),
        __metadata("design:type", String)
    ], UpdateFunctionCodeRequestBody.prototype, "zipFile", void 0);
    return UpdateFunctionCodeRequestBody;
}(SpeakeasyBase));
export { UpdateFunctionCodeRequestBody };
var UpdateFunctionCodeRequest = /** @class */ (function (_super) {
    __extends(UpdateFunctionCodeRequest, _super);
    function UpdateFunctionCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFunctionCodePathParams)
    ], UpdateFunctionCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFunctionCodeHeaders)
    ], UpdateFunctionCodeRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFunctionCodeRequestBody)
    ], UpdateFunctionCodeRequest.prototype, "request", void 0);
    return UpdateFunctionCodeRequest;
}(SpeakeasyBase));
export { UpdateFunctionCodeRequest };
var UpdateFunctionCodeResponse = /** @class */ (function (_super) {
    __extends(UpdateFunctionCodeResponse, _super);
    function UpdateFunctionCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "codeSigningConfigNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "codeStorageExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "codeVerificationFailedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateFunctionCodeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FunctionConfiguration)
    ], UpdateFunctionCodeResponse.prototype, "functionConfiguration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "invalidCodeSignatureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateFunctionCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionCodeResponse.prototype, "tooManyRequestsException", void 0);
    return UpdateFunctionCodeResponse;
}(SpeakeasyBase));
export { UpdateFunctionCodeResponse };
