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
var PostAdminGroupsJsonRequestBodyGroup = /** @class */ (function (_super) {
    __extends(PostAdminGroupsJsonRequestBodyGroup, _super);
    function PostAdminGroupsJsonRequestBodyGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJsonRequestBodyGroup.prototype, "name", void 0);
    return PostAdminGroupsJsonRequestBodyGroup;
}(SpeakeasyBase));
export { PostAdminGroupsJsonRequestBodyGroup };
var PostAdminGroupsJsonRequestBody = /** @class */ (function (_super) {
    __extends(PostAdminGroupsJsonRequestBody, _super);
    function PostAdminGroupsJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", PostAdminGroupsJsonRequestBodyGroup)
    ], PostAdminGroupsJsonRequestBody.prototype, "group", void 0);
    return PostAdminGroupsJsonRequestBody;
}(SpeakeasyBase));
export { PostAdminGroupsJsonRequestBody };
var PostAdminGroupsJson200ApplicationJsonBasicGroup = /** @class */ (function (_super) {
    __extends(PostAdminGroupsJson200ApplicationJsonBasicGroup, _super);
    function PostAdminGroupsJson200ApplicationJsonBasicGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_membership_requests" }),
        __metadata("design:type", Boolean)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "allowMembershipRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatic" }),
        __metadata("design:type", Boolean)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "automatic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatic_membership_email_domains" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "automaticMembershipEmailDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatic_membership_retroactive" }),
        __metadata("design:type", Boolean)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "automaticMembershipRetroactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio_cooked" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "bioCooked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio_excerpt" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "bioExcerpt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio_raw" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "bioRaw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_see_members" }),
        __metadata("design:type", Boolean)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "canSeeMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_notification_level" }),
        __metadata("design:type", Number)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "defaultNotificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_bg_color" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "flairBgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_color" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "flairColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_url" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "flairUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grant_trust_level" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "grantTrustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_messages" }),
        __metadata("design:type", Boolean)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "hasMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_email" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "incomingEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membership_request_template" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "membershipRequestTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membership_visibility_level" }),
        __metadata("design:type", Number)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "membershipVisibilityLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mentionable_level" }),
        __metadata("design:type", Number)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "mentionableLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageable_level" }),
        __metadata("design:type", Number)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "messageableLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group" }),
        __metadata("design:type", Boolean)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "primaryGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_admission" }),
        __metadata("design:type", Boolean)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "publicAdmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_exit" }),
        __metadata("design:type", Boolean)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "publicExit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publish_read_state" }),
        __metadata("design:type", Boolean)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "publishReadState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_count" }),
        __metadata("design:type", Number)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "userCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility_level" }),
        __metadata("design:type", Number)
    ], PostAdminGroupsJson200ApplicationJsonBasicGroup.prototype, "visibilityLevel", void 0);
    return PostAdminGroupsJson200ApplicationJsonBasicGroup;
}(SpeakeasyBase));
export { PostAdminGroupsJson200ApplicationJsonBasicGroup };
var PostAdminGroupsJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAdminGroupsJson200ApplicationJson, _super);
    function PostAdminGroupsJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basic_group" }),
        __metadata("design:type", PostAdminGroupsJson200ApplicationJsonBasicGroup)
    ], PostAdminGroupsJson200ApplicationJson.prototype, "basicGroup", void 0);
    return PostAdminGroupsJson200ApplicationJson;
}(SpeakeasyBase));
export { PostAdminGroupsJson200ApplicationJson };
var PostAdminGroupsJsonRequest = /** @class */ (function (_super) {
    __extends(PostAdminGroupsJsonRequest, _super);
    function PostAdminGroupsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAdminGroupsJsonRequestBody)
    ], PostAdminGroupsJsonRequest.prototype, "request", void 0);
    return PostAdminGroupsJsonRequest;
}(SpeakeasyBase));
export { PostAdminGroupsJsonRequest };
var PostAdminGroupsJsonResponse = /** @class */ (function (_super) {
    __extends(PostAdminGroupsJsonResponse, _super);
    function PostAdminGroupsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAdminGroupsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAdminGroupsJson200ApplicationJson)
    ], PostAdminGroupsJsonResponse.prototype, "postAdminGroupsJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAdminGroupsJsonResponse.prototype, "statusCode", void 0);
    return PostAdminGroupsJsonResponse;
}(SpeakeasyBase));
export { PostAdminGroupsJsonResponse };
