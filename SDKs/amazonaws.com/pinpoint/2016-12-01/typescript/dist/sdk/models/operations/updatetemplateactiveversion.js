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
var UpdateTemplateActiveVersionPathParams = /** @class */ (function (_super) {
    __extends(UpdateTemplateActiveVersionPathParams, _super);
    function UpdateTemplateActiveVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionPathParams.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-type" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionPathParams.prototype, "templateType", void 0);
    return UpdateTemplateActiveVersionPathParams;
}(SpeakeasyBase));
export { UpdateTemplateActiveVersionPathParams };
var UpdateTemplateActiveVersionHeaders = /** @class */ (function (_super) {
    __extends(UpdateTemplateActiveVersionHeaders, _super);
    function UpdateTemplateActiveVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateTemplateActiveVersionHeaders;
}(SpeakeasyBase));
export { UpdateTemplateActiveVersionHeaders };
// UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest
/**
 * Specifies which version of a message template to use as the active version of the template.
**/
var UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest = /** @class */ (function (_super) {
    __extends(UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest, _super);
    function UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest.prototype, "version", void 0);
    return UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest;
}(SpeakeasyBase));
export { UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest };
var UpdateTemplateActiveVersionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateTemplateActiveVersionRequestBody, _super);
    function UpdateTemplateActiveVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateActiveVersionRequest" }),
        __metadata("design:type", UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest)
    ], UpdateTemplateActiveVersionRequestBody.prototype, "templateActiveVersionRequest", void 0);
    return UpdateTemplateActiveVersionRequestBody;
}(SpeakeasyBase));
export { UpdateTemplateActiveVersionRequestBody };
var UpdateTemplateActiveVersionRequest = /** @class */ (function (_super) {
    __extends(UpdateTemplateActiveVersionRequest, _super);
    function UpdateTemplateActiveVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTemplateActiveVersionPathParams)
    ], UpdateTemplateActiveVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTemplateActiveVersionHeaders)
    ], UpdateTemplateActiveVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateTemplateActiveVersionRequestBody)
    ], UpdateTemplateActiveVersionRequest.prototype, "request", void 0);
    return UpdateTemplateActiveVersionRequest;
}(SpeakeasyBase));
export { UpdateTemplateActiveVersionRequest };
var UpdateTemplateActiveVersionResponse = /** @class */ (function (_super) {
    __extends(UpdateTemplateActiveVersionResponse, _super);
    function UpdateTemplateActiveVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTemplateActiveVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTemplateActiveVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTemplateActiveVersionResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTemplateActiveVersionResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTemplateActiveVersionResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTemplateActiveVersionResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTemplateActiveVersionResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTemplateActiveVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTemplateActiveVersionResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateTemplateActiveVersionResponse)
    ], UpdateTemplateActiveVersionResponse.prototype, "updateTemplateActiveVersionResponse", void 0);
    return UpdateTemplateActiveVersionResponse;
}(SpeakeasyBase));
export { UpdateTemplateActiveVersionResponse };
