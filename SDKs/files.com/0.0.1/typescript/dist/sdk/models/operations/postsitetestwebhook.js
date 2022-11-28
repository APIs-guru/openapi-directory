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
var PostSiteTestWebhookRequestBody = /** @class */ (function (_super) {
    __extends(PostSiteTestWebhookRequestBody, _super);
    function PostSiteTestWebhookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], PostSiteTestWebhookRequestBody.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=body;json=true" }),
        __metadata("design:type", Map)
    ], PostSiteTestWebhookRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=encoding" }),
        __metadata("design:type", String)
    ], PostSiteTestWebhookRequestBody.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=headers;json=true" }),
        __metadata("design:type", Map)
    ], PostSiteTestWebhookRequestBody.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=method" }),
        __metadata("design:type", String)
    ], PostSiteTestWebhookRequestBody.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=url" }),
        __metadata("design:type", String)
    ], PostSiteTestWebhookRequestBody.prototype, "url", void 0);
    return PostSiteTestWebhookRequestBody;
}(SpeakeasyBase));
export { PostSiteTestWebhookRequestBody };
var PostSiteTestWebhookRequest = /** @class */ (function (_super) {
    __extends(PostSiteTestWebhookRequest, _super);
    function PostSiteTestWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostSiteTestWebhookRequestBody)
    ], PostSiteTestWebhookRequest.prototype, "request", void 0);
    return PostSiteTestWebhookRequest;
}(SpeakeasyBase));
export { PostSiteTestWebhookRequest };
var PostSiteTestWebhookResponse = /** @class */ (function (_super) {
    __extends(PostSiteTestWebhookResponse, _super);
    function PostSiteTestWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSiteTestWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSiteTestWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StatusEntity)
    ], PostSiteTestWebhookResponse.prototype, "statusEntity", void 0);
    return PostSiteTestWebhookResponse;
}(SpeakeasyBase));
export { PostSiteTestWebhookResponse };
