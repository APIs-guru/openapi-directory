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
var UpdateInAppTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateInAppTemplatePathParams, _super);
    function UpdateInAppTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplatePathParams.prototype, "templateName", void 0);
    return UpdateInAppTemplatePathParams;
}(SpeakeasyBase));
export { UpdateInAppTemplatePathParams };
var UpdateInAppTemplateQueryParams = /** @class */ (function (_super) {
    __extends(UpdateInAppTemplateQueryParams, _super);
    function UpdateInAppTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=create-new-version" }),
        __metadata("design:type", Boolean)
    ], UpdateInAppTemplateQueryParams.prototype, "createNewVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateQueryParams.prototype, "version", void 0);
    return UpdateInAppTemplateQueryParams;
}(SpeakeasyBase));
export { UpdateInAppTemplateQueryParams };
var UpdateInAppTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdateInAppTemplateHeaders, _super);
    function UpdateInAppTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateInAppTemplateHeaders;
}(SpeakeasyBase));
export { UpdateInAppTemplateHeaders };
// UpdateInAppTemplateRequestBodyInAppTemplateRequest
/**
 * InApp Template Request.
**/
var UpdateInAppTemplateRequestBodyInAppTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateInAppTemplateRequestBodyInAppTemplateRequest, _super);
    function UpdateInAppTemplateRequestBodyInAppTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Content", elemType: shared.InAppMessageContent }),
        __metadata("design:type", Array)
    ], UpdateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomConfig" }),
        __metadata("design:type", Map)
    ], UpdateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "customConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Layout" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], UpdateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], UpdateInAppTemplateRequestBodyInAppTemplateRequest.prototype, "tags", void 0);
    return UpdateInAppTemplateRequestBodyInAppTemplateRequest;
}(SpeakeasyBase));
export { UpdateInAppTemplateRequestBodyInAppTemplateRequest };
var UpdateInAppTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateInAppTemplateRequestBody, _super);
    function UpdateInAppTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InAppTemplateRequest" }),
        __metadata("design:type", UpdateInAppTemplateRequestBodyInAppTemplateRequest)
    ], UpdateInAppTemplateRequestBody.prototype, "inAppTemplateRequest", void 0);
    return UpdateInAppTemplateRequestBody;
}(SpeakeasyBase));
export { UpdateInAppTemplateRequestBody };
var UpdateInAppTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateInAppTemplateRequest, _super);
    function UpdateInAppTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInAppTemplatePathParams)
    ], UpdateInAppTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInAppTemplateQueryParams)
    ], UpdateInAppTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInAppTemplateHeaders)
    ], UpdateInAppTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateInAppTemplateRequestBody)
    ], UpdateInAppTemplateRequest.prototype, "request", void 0);
    return UpdateInAppTemplateRequest;
}(SpeakeasyBase));
export { UpdateInAppTemplateRequest };
var UpdateInAppTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateInAppTemplateResponse, _super);
    function UpdateInAppTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateInAppTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateInAppTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateInAppTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateInAppTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateInAppTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateInAppTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateInAppTemplateResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateInAppTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateInAppTemplateResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateInAppTemplateResponse)
    ], UpdateInAppTemplateResponse.prototype, "updateInAppTemplateResponse", void 0);
    return UpdateInAppTemplateResponse;
}(SpeakeasyBase));
export { UpdateInAppTemplateResponse };
