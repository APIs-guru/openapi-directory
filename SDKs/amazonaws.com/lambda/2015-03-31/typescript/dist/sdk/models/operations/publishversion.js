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
var PublishVersionPathParams = /** @class */ (function (_super) {
    __extends(PublishVersionPathParams, _super);
    function PublishVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], PublishVersionPathParams.prototype, "functionName", void 0);
    return PublishVersionPathParams;
}(SpeakeasyBase));
export { PublishVersionPathParams };
var PublishVersionHeaders = /** @class */ (function (_super) {
    __extends(PublishVersionHeaders, _super);
    function PublishVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PublishVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PublishVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PublishVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PublishVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PublishVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PublishVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PublishVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PublishVersionHeaders;
}(SpeakeasyBase));
export { PublishVersionHeaders };
var PublishVersionRequestBody = /** @class */ (function (_super) {
    __extends(PublishVersionRequestBody, _super);
    function PublishVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CodeSha256" }),
        __metadata("design:type", String)
    ], PublishVersionRequestBody.prototype, "codeSha256", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], PublishVersionRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=RevisionId" }),
        __metadata("design:type", String)
    ], PublishVersionRequestBody.prototype, "revisionId", void 0);
    return PublishVersionRequestBody;
}(SpeakeasyBase));
export { PublishVersionRequestBody };
var PublishVersionRequest = /** @class */ (function (_super) {
    __extends(PublishVersionRequest, _super);
    function PublishVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PublishVersionPathParams)
    ], PublishVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PublishVersionHeaders)
    ], PublishVersionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PublishVersionRequestBody)
    ], PublishVersionRequest.prototype, "request", void 0);
    return PublishVersionRequest;
}(SpeakeasyBase));
export { PublishVersionRequest };
var PublishVersionResponse = /** @class */ (function (_super) {
    __extends(PublishVersionResponse, _super);
    function PublishVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishVersionResponse.prototype, "codeStorageExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PublishVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FunctionConfiguration)
    ], PublishVersionResponse.prototype, "functionConfiguration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishVersionResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishVersionResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishVersionResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishVersionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishVersionResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PublishVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishVersionResponse.prototype, "tooManyRequestsException", void 0);
    return PublishVersionResponse;
}(SpeakeasyBase));
export { PublishVersionResponse };
