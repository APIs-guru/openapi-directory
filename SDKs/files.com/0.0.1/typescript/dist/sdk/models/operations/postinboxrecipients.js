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
var PostInboxRecipientsRequestBody = /** @class */ (function (_super) {
    __extends(PostInboxRecipientsRequestBody, _super);
    function PostInboxRecipientsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=company" }),
        __metadata("design:type", String)
    ], PostInboxRecipientsRequestBody.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=inbox_id" }),
        __metadata("design:type", Number)
    ], PostInboxRecipientsRequestBody.prototype, "inboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PostInboxRecipientsRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=note" }),
        __metadata("design:type", String)
    ], PostInboxRecipientsRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=recipient" }),
        __metadata("design:type", String)
    ], PostInboxRecipientsRequestBody.prototype, "recipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=share_after_create" }),
        __metadata("design:type", Boolean)
    ], PostInboxRecipientsRequestBody.prototype, "shareAfterCreate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_id" }),
        __metadata("design:type", Number)
    ], PostInboxRecipientsRequestBody.prototype, "userId", void 0);
    return PostInboxRecipientsRequestBody;
}(SpeakeasyBase));
export { PostInboxRecipientsRequestBody };
var PostInboxRecipientsRequest = /** @class */ (function (_super) {
    __extends(PostInboxRecipientsRequest, _super);
    function PostInboxRecipientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostInboxRecipientsRequestBody)
    ], PostInboxRecipientsRequest.prototype, "request", void 0);
    return PostInboxRecipientsRequest;
}(SpeakeasyBase));
export { PostInboxRecipientsRequest };
var PostInboxRecipientsResponse = /** @class */ (function (_super) {
    __extends(PostInboxRecipientsResponse, _super);
    function PostInboxRecipientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostInboxRecipientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InboxRecipientEntity)
    ], PostInboxRecipientsResponse.prototype, "inboxRecipientEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostInboxRecipientsResponse.prototype, "statusCode", void 0);
    return PostInboxRecipientsResponse;
}(SpeakeasyBase));
export { PostInboxRecipientsResponse };
