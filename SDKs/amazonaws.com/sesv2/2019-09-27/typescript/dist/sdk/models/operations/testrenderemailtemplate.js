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
var TestRenderEmailTemplatePathParams = /** @class */ (function (_super) {
    __extends(TestRenderEmailTemplatePathParams, _super);
    function TestRenderEmailTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TemplateName" }),
        __metadata("design:type", String)
    ], TestRenderEmailTemplatePathParams.prototype, "templateName", void 0);
    return TestRenderEmailTemplatePathParams;
}(SpeakeasyBase));
export { TestRenderEmailTemplatePathParams };
var TestRenderEmailTemplateHeaders = /** @class */ (function (_super) {
    __extends(TestRenderEmailTemplateHeaders, _super);
    function TestRenderEmailTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], TestRenderEmailTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], TestRenderEmailTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], TestRenderEmailTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], TestRenderEmailTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], TestRenderEmailTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], TestRenderEmailTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], TestRenderEmailTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return TestRenderEmailTemplateHeaders;
}(SpeakeasyBase));
export { TestRenderEmailTemplateHeaders };
var TestRenderEmailTemplateRequestBody = /** @class */ (function (_super) {
    __extends(TestRenderEmailTemplateRequestBody, _super);
    function TestRenderEmailTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateData" }),
        __metadata("design:type", String)
    ], TestRenderEmailTemplateRequestBody.prototype, "templateData", void 0);
    return TestRenderEmailTemplateRequestBody;
}(SpeakeasyBase));
export { TestRenderEmailTemplateRequestBody };
var TestRenderEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(TestRenderEmailTemplateRequest, _super);
    function TestRenderEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestRenderEmailTemplatePathParams)
    ], TestRenderEmailTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestRenderEmailTemplateHeaders)
    ], TestRenderEmailTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TestRenderEmailTemplateRequestBody)
    ], TestRenderEmailTemplateRequest.prototype, "request", void 0);
    return TestRenderEmailTemplateRequest;
}(SpeakeasyBase));
export { TestRenderEmailTemplateRequest };
var TestRenderEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(TestRenderEmailTemplateResponse, _super);
    function TestRenderEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestRenderEmailTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestRenderEmailTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestRenderEmailTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestRenderEmailTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestRenderEmailTemplateResponse)
    ], TestRenderEmailTemplateResponse.prototype, "testRenderEmailTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestRenderEmailTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return TestRenderEmailTemplateResponse;
}(SpeakeasyBase));
export { TestRenderEmailTemplateResponse };
