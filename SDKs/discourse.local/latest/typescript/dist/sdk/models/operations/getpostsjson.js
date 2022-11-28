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
var GetPostsJsonHeaders = /** @class */ (function (_super) {
    __extends(GetPostsJsonHeaders, _super);
    function GetPostsJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], GetPostsJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], GetPostsJsonHeaders.prototype, "apiUsername", void 0);
    return GetPostsJsonHeaders;
}(SpeakeasyBase));
export { GetPostsJsonHeaders };
var GetPostsJson200ApplicationJsonLatestPostsActionsSummary = /** @class */ (function (_super) {
    __extends(GetPostsJson200ApplicationJsonLatestPostsActionsSummary, _super);
    function GetPostsJson200ApplicationJsonLatestPostsActionsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_act" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPostsActionsSummary.prototype, "canAct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPostsActionsSummary.prototype, "id", void 0);
    return GetPostsJson200ApplicationJsonLatestPostsActionsSummary;
}(SpeakeasyBase));
export { GetPostsJson200ApplicationJsonLatestPostsActionsSummary };
var GetPostsJson200ApplicationJsonLatestPosts = /** @class */ (function (_super) {
    __extends(GetPostsJson200ApplicationJsonLatestPosts, _super);
    function GetPostsJson200ApplicationJsonLatestPosts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions_summary", elemType: GetPostsJson200ApplicationJsonLatestPostsActionsSummary }),
        __metadata("design:type", Array)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "actionsSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_delete" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_recover" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "canRecover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_view_edit_history" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "canViewEditHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_wiki" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "canWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cooked" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "cooked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_at" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "deletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_username" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "displayUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_reason" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "editReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_bg_color" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "flairBgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_color" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "flairColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_name" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "flairName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_url" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "flairUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_link_count" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "incomingLinkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderator" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "moderator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_number" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "postNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_type" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "postType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_name" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "primaryGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quote_count" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "quoteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "raw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readers_count" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "readersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reads" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "reads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_to_post_number" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "replyToPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_id" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "reviewableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_count" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "reviewableScoreCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_pending_count" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "reviewableScorePendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staff" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "staff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_html_title" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "topicHtmlTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_id" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "topicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_slug" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "topicSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_title" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "topicTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trust_level" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "trustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_deleted" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "userDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_title" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "userTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wiki" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "wiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yours" }),
        __metadata("design:type", Boolean)
    ], GetPostsJson200ApplicationJsonLatestPosts.prototype, "yours", void 0);
    return GetPostsJson200ApplicationJsonLatestPosts;
}(SpeakeasyBase));
export { GetPostsJson200ApplicationJsonLatestPosts };
var GetPostsJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPostsJson200ApplicationJson, _super);
    function GetPostsJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_posts", elemType: GetPostsJson200ApplicationJsonLatestPosts }),
        __metadata("design:type", Array)
    ], GetPostsJson200ApplicationJson.prototype, "latestPosts", void 0);
    return GetPostsJson200ApplicationJson;
}(SpeakeasyBase));
export { GetPostsJson200ApplicationJson };
var GetPostsJsonRequest = /** @class */ (function (_super) {
    __extends(GetPostsJsonRequest, _super);
    function GetPostsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsJsonHeaders)
    ], GetPostsJsonRequest.prototype, "headers", void 0);
    return GetPostsJsonRequest;
}(SpeakeasyBase));
export { GetPostsJsonRequest };
var GetPostsJsonResponse = /** @class */ (function (_super) {
    __extends(GetPostsJsonResponse, _super);
    function GetPostsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPostsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsJson200ApplicationJson)
    ], GetPostsJsonResponse.prototype, "getPostsJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPostsJsonResponse.prototype, "statusCode", void 0);
    return GetPostsJsonResponse;
}(SpeakeasyBase));
export { GetPostsJsonResponse };
