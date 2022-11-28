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
var DeleteCustomVerificationEmailTemplatePathParams = /** @class */ (function (_super) {
    __extends(DeleteCustomVerificationEmailTemplatePathParams, _super);
    function DeleteCustomVerificationEmailTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TemplateName" }),
        __metadata("design:type", String)
    ], DeleteCustomVerificationEmailTemplatePathParams.prototype, "templateName", void 0);
    return DeleteCustomVerificationEmailTemplatePathParams;
}(SpeakeasyBase));
export { DeleteCustomVerificationEmailTemplatePathParams };
var DeleteCustomVerificationEmailTemplateHeaders = /** @class */ (function (_super) {
    __extends(DeleteCustomVerificationEmailTemplateHeaders, _super);
    function DeleteCustomVerificationEmailTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteCustomVerificationEmailTemplateHeaders;
}(SpeakeasyBase));
export { DeleteCustomVerificationEmailTemplateHeaders };
var DeleteCustomVerificationEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(DeleteCustomVerificationEmailTemplateRequest, _super);
    function DeleteCustomVerificationEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomVerificationEmailTemplatePathParams)
    ], DeleteCustomVerificationEmailTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomVerificationEmailTemplateHeaders)
    ], DeleteCustomVerificationEmailTemplateRequest.prototype, "headers", void 0);
    return DeleteCustomVerificationEmailTemplateRequest;
}(SpeakeasyBase));
export { DeleteCustomVerificationEmailTemplateRequest };
var DeleteCustomVerificationEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(DeleteCustomVerificationEmailTemplateResponse, _super);
    function DeleteCustomVerificationEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCustomVerificationEmailTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCustomVerificationEmailTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteCustomVerificationEmailTemplateResponse.prototype, "deleteCustomVerificationEmailTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCustomVerificationEmailTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCustomVerificationEmailTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCustomVerificationEmailTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteCustomVerificationEmailTemplateResponse;
}(SpeakeasyBase));
export { DeleteCustomVerificationEmailTemplateResponse };
