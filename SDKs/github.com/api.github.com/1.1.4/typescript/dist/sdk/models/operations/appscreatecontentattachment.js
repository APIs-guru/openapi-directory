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
var AppsCreateContentAttachmentPathParams = /** @class */ (function (_super) {
    __extends(AppsCreateContentAttachmentPathParams, _super);
    function AppsCreateContentAttachmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=content_reference_id" }),
        __metadata("design:type", Number)
    ], AppsCreateContentAttachmentPathParams.prototype, "contentReferenceId", void 0);
    return AppsCreateContentAttachmentPathParams;
}(SpeakeasyBase));
export { AppsCreateContentAttachmentPathParams };
var AppsCreateContentAttachmentRequestBody = /** @class */ (function (_super) {
    __extends(AppsCreateContentAttachmentRequestBody, _super);
    function AppsCreateContentAttachmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], AppsCreateContentAttachmentRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AppsCreateContentAttachmentRequestBody.prototype, "title", void 0);
    return AppsCreateContentAttachmentRequestBody;
}(SpeakeasyBase));
export { AppsCreateContentAttachmentRequestBody };
var AppsCreateContentAttachment415ApplicationJson = /** @class */ (function (_super) {
    __extends(AppsCreateContentAttachment415ApplicationJson, _super);
    function AppsCreateContentAttachment415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], AppsCreateContentAttachment415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppsCreateContentAttachment415ApplicationJson.prototype, "message", void 0);
    return AppsCreateContentAttachment415ApplicationJson;
}(SpeakeasyBase));
export { AppsCreateContentAttachment415ApplicationJson };
var AppsCreateContentAttachmentRequest = /** @class */ (function (_super) {
    __extends(AppsCreateContentAttachmentRequest, _super);
    function AppsCreateContentAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsCreateContentAttachmentPathParams)
    ], AppsCreateContentAttachmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AppsCreateContentAttachmentRequestBody)
    ], AppsCreateContentAttachmentRequest.prototype, "request", void 0);
    return AppsCreateContentAttachmentRequest;
}(SpeakeasyBase));
export { AppsCreateContentAttachmentRequest };
var AppsCreateContentAttachmentResponse = /** @class */ (function (_super) {
    __extends(AppsCreateContentAttachmentResponse, _super);
    function AppsCreateContentAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppsCreateContentAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppsCreateContentAttachmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsCreateContentAttachment415ApplicationJson)
    ], AppsCreateContentAttachmentResponse.prototype, "appsCreateContentAttachment415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], AppsCreateContentAttachmentResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContentReferenceAttachment)
    ], AppsCreateContentAttachmentResponse.prototype, "contentReferenceAttachment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], AppsCreateContentAttachmentResponse.prototype, "validationError", void 0);
    return AppsCreateContentAttachmentResponse;
}(SpeakeasyBase));
export { AppsCreateContentAttachmentResponse };
