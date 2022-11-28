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
var PostWebhookTestsRequestBody = /** @class */ (function (_super) {
    __extends(PostWebhookTestsRequestBody, _super);
    function PostWebhookTestsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], PostWebhookTestsRequestBody.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=body;json=true" }),
        __metadata("design:type", Map)
    ], PostWebhookTestsRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=encoding" }),
        __metadata("design:type", String)
    ], PostWebhookTestsRequestBody.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file_as_body" }),
        __metadata("design:type", Boolean)
    ], PostWebhookTestsRequestBody.prototype, "fileAsBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file_form_field" }),
        __metadata("design:type", String)
    ], PostWebhookTestsRequestBody.prototype, "fileFormField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=headers;json=true" }),
        __metadata("design:type", Map)
    ], PostWebhookTestsRequestBody.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=method" }),
        __metadata("design:type", String)
    ], PostWebhookTestsRequestBody.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=raw_body" }),
        __metadata("design:type", String)
    ], PostWebhookTestsRequestBody.prototype, "rawBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=url" }),
        __metadata("design:type", String)
    ], PostWebhookTestsRequestBody.prototype, "url", void 0);
    return PostWebhookTestsRequestBody;
}(SpeakeasyBase));
export { PostWebhookTestsRequestBody };
var PostWebhookTestsRequest = /** @class */ (function (_super) {
    __extends(PostWebhookTestsRequest, _super);
    function PostWebhookTestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostWebhookTestsRequestBody)
    ], PostWebhookTestsRequest.prototype, "request", void 0);
    return PostWebhookTestsRequest;
}(SpeakeasyBase));
export { PostWebhookTestsRequest };
var PostWebhookTestsResponse = /** @class */ (function (_super) {
    __extends(PostWebhookTestsResponse, _super);
    function PostWebhookTestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostWebhookTestsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostWebhookTestsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WebhookTestEntity)
    ], PostWebhookTestsResponse.prototype, "webhookTestEntity", void 0);
    return PostWebhookTestsResponse;
}(SpeakeasyBase));
export { PostWebhookTestsResponse };
