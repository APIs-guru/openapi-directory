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
var PostInvitesJsonHeaders = /** @class */ (function (_super) {
    __extends(PostInvitesJsonHeaders, _super);
    function PostInvitesJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PostInvitesJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PostInvitesJsonHeaders.prototype, "apiUsername", void 0);
    return PostInvitesJsonHeaders;
}(SpeakeasyBase));
export { PostInvitesJsonHeaders };
var PostInvitesJsonRequestBody = /** @class */ (function (_super) {
    __extends(PostInvitesJsonRequestBody, _super);
    function PostInvitesJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_message" }),
        __metadata("design:type", String)
    ], PostInvitesJsonRequestBody.prototype, "customMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostInvitesJsonRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], PostInvitesJsonRequestBody.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_id" }),
        __metadata("design:type", Number)
    ], PostInvitesJsonRequestBody.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_names" }),
        __metadata("design:type", String)
    ], PostInvitesJsonRequestBody.prototype, "groupNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_redemptions_allowed" }),
        __metadata("design:type", Number)
    ], PostInvitesJsonRequestBody.prototype, "maxRedemptionsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_email" }),
        __metadata("design:type", Boolean)
    ], PostInvitesJsonRequestBody.prototype, "skipEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_id" }),
        __metadata("design:type", Number)
    ], PostInvitesJsonRequestBody.prototype, "topicId", void 0);
    return PostInvitesJsonRequestBody;
}(SpeakeasyBase));
export { PostInvitesJsonRequestBody };
var PostInvitesJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostInvitesJson200ApplicationJson, _super);
    function PostInvitesJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PostInvitesJson200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_message" }),
        __metadata("design:type", String)
    ], PostInvitesJson200ApplicationJson.prototype, "customMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostInvitesJson200ApplicationJson.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailed" }),
        __metadata("design:type", Boolean)
    ], PostInvitesJson200ApplicationJson.prototype, "emailed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], PostInvitesJson200ApplicationJson.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], PostInvitesJson200ApplicationJson.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], PostInvitesJson200ApplicationJson.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostInvitesJson200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PostInvitesJson200ApplicationJson.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], PostInvitesJson200ApplicationJson.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], PostInvitesJson200ApplicationJson.prototype, "updatedAt", void 0);
    return PostInvitesJson200ApplicationJson;
}(SpeakeasyBase));
export { PostInvitesJson200ApplicationJson };
var PostInvitesJsonRequest = /** @class */ (function (_super) {
    __extends(PostInvitesJsonRequest, _super);
    function PostInvitesJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostInvitesJsonHeaders)
    ], PostInvitesJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostInvitesJsonRequestBody)
    ], PostInvitesJsonRequest.prototype, "request", void 0);
    return PostInvitesJsonRequest;
}(SpeakeasyBase));
export { PostInvitesJsonRequest };
var PostInvitesJsonResponse = /** @class */ (function (_super) {
    __extends(PostInvitesJsonResponse, _super);
    function PostInvitesJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostInvitesJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostInvitesJson200ApplicationJson)
    ], PostInvitesJsonResponse.prototype, "postInvitesJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostInvitesJsonResponse.prototype, "statusCode", void 0);
    return PostInvitesJsonResponse;
}(SpeakeasyBase));
export { PostInvitesJsonResponse };
