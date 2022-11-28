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
var GetPostsIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetPostsIdJsonPathParams, _super);
    function GetPostsIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPostsIdJsonPathParams.prototype, "id", void 0);
    return GetPostsIdJsonPathParams;
}(SpeakeasyBase));
export { GetPostsIdJsonPathParams };
var GetPostsIdJsonHeaders = /** @class */ (function (_super) {
    __extends(GetPostsIdJsonHeaders, _super);
    function GetPostsIdJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], GetPostsIdJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], GetPostsIdJsonHeaders.prototype, "apiUsername", void 0);
    return GetPostsIdJsonHeaders;
}(SpeakeasyBase));
export { GetPostsIdJsonHeaders };
var GetPostsIdJson200ApplicationJsonActionsSummary = /** @class */ (function (_super) {
    __extends(GetPostsIdJson200ApplicationJsonActionsSummary, _super);
    function GetPostsIdJson200ApplicationJsonActionsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_act" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJsonActionsSummary.prototype, "canAct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJsonActionsSummary.prototype, "id", void 0);
    return GetPostsIdJson200ApplicationJsonActionsSummary;
}(SpeakeasyBase));
export { GetPostsIdJson200ApplicationJsonActionsSummary };
var GetPostsIdJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPostsIdJson200ApplicationJson, _super);
    function GetPostsIdJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions_summary", elemType: GetPostsIdJson200ApplicationJsonActionsSummary }),
        __metadata("design:type", Array)
    ], GetPostsIdJson200ApplicationJson.prototype, "actionsSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_delete" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_recover" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "canRecover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_view_edit_history" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "canViewEditHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_wiki" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "canWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cooked" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "cooked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_at" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "deletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_username" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "displayUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_reason" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "editReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_bg_color" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "flairBgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_color" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "flairColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_name" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "flairName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_url" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "flairUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_link_count" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "incomingLinkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderator" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "moderator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_number" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "postNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_type" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "postType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_name" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "primaryGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quote_count" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "quoteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "raw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readers_count" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "readersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reads" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "reads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_to_post_number" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "replyToPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_id" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "reviewableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_count" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "reviewableScoreCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_pending_count" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "reviewableScorePendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staff" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "staff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_id" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "topicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_slug" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "topicSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trust_level" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "trustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_deleted" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "userDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_title" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "userTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetPostsIdJson200ApplicationJson.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetPostsIdJson200ApplicationJson.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wiki" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "wiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yours" }),
        __metadata("design:type", Boolean)
    ], GetPostsIdJson200ApplicationJson.prototype, "yours", void 0);
    return GetPostsIdJson200ApplicationJson;
}(SpeakeasyBase));
export { GetPostsIdJson200ApplicationJson };
var GetPostsIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetPostsIdJsonRequest, _super);
    function GetPostsIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsIdJsonPathParams)
    ], GetPostsIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsIdJsonHeaders)
    ], GetPostsIdJsonRequest.prototype, "headers", void 0);
    return GetPostsIdJsonRequest;
}(SpeakeasyBase));
export { GetPostsIdJsonRequest };
var GetPostsIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetPostsIdJsonResponse, _super);
    function GetPostsIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPostsIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsIdJson200ApplicationJson)
    ], GetPostsIdJsonResponse.prototype, "getPostsIdJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPostsIdJsonResponse.prototype, "statusCode", void 0);
    return GetPostsIdJsonResponse;
}(SpeakeasyBase));
export { GetPostsIdJsonResponse };
