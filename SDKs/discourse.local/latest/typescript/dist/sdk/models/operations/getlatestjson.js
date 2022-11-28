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
var GetLatestJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetLatestJsonQueryParams, _super);
    function GetLatestJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ascending" }),
        __metadata("design:type", String)
    ], GetLatestJsonQueryParams.prototype, "ascending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetLatestJsonQueryParams.prototype, "order", void 0);
    return GetLatestJsonQueryParams;
}(SpeakeasyBase));
export { GetLatestJsonQueryParams };
var GetLatestJsonHeaders = /** @class */ (function (_super) {
    __extends(GetLatestJsonHeaders, _super);
    function GetLatestJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], GetLatestJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], GetLatestJsonHeaders.prototype, "apiUsername", void 0);
    return GetLatestJsonHeaders;
}(SpeakeasyBase));
export { GetLatestJsonHeaders };
var GetLatestJson200ApplicationJsonTopicListTopicsPosters = /** @class */ (function (_super) {
    __extends(GetLatestJson200ApplicationJsonTopicListTopicsPosters, _super);
    function GetLatestJson200ApplicationJsonTopicListTopicsPosters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopicsPosters.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extras" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopicsPosters.prototype, "extras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_id" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopicsPosters.prototype, "primaryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopicsPosters.prototype, "userId", void 0);
    return GetLatestJson200ApplicationJsonTopicListTopicsPosters;
}(SpeakeasyBase));
export { GetLatestJson200ApplicationJsonTopicListTopicsPosters };
var GetLatestJson200ApplicationJsonTopicListTopics = /** @class */ (function (_super) {
    __extends(GetLatestJson200ApplicationJsonTopicListTopics, _super);
    function GetLatestJson200ApplicationJsonTopicListTopics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archetype" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "archetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookmarked" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "bookmarked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bumped" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "bumped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bumped_at" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "bumpedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fancy_title" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "fancyTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured_link" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "featuredLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_summary" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "hasSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highest_post_number" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "highestPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_posted_at" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "lastPostedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_poster_username" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "lastPosterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_post_number" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "lastReadPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like_count" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "likeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "liked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_level" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "notificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=op_like_count" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "opLikeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "pinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned_globally" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "pinnedGlobally", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posters", elemType: GetLatestJson200ApplicationJsonTopicListTopicsPosters }),
        __metadata("design:type", Array)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "posters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts_count" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "postsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unpinned" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "unpinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unread_posts" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "unreadPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unseen" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "unseen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=views" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "views", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicListTopics.prototype, "visible", void 0);
    return GetLatestJson200ApplicationJsonTopicListTopics;
}(SpeakeasyBase));
export { GetLatestJson200ApplicationJsonTopicListTopics };
var GetLatestJson200ApplicationJsonTopicList = /** @class */ (function (_super) {
    __extends(GetLatestJson200ApplicationJsonTopicList, _super);
    function GetLatestJson200ApplicationJsonTopicList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_create_topic" }),
        __metadata("design:type", Boolean)
    ], GetLatestJson200ApplicationJsonTopicList.prototype, "canCreateTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicList.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft_key" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonTopicList.prototype, "draftKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft_sequence" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicList.prototype, "draftSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonTopicList.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics", elemType: GetLatestJson200ApplicationJsonTopicListTopics }),
        __metadata("design:type", Array)
    ], GetLatestJson200ApplicationJsonTopicList.prototype, "topics", void 0);
    return GetLatestJson200ApplicationJsonTopicList;
}(SpeakeasyBase));
export { GetLatestJson200ApplicationJsonTopicList };
var GetLatestJson200ApplicationJsonUsers = /** @class */ (function (_super) {
    __extends(GetLatestJson200ApplicationJsonUsers, _super);
    function GetLatestJson200ApplicationJsonUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonUsers.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLatestJson200ApplicationJsonUsers.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonUsers.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetLatestJson200ApplicationJsonUsers.prototype, "username", void 0);
    return GetLatestJson200ApplicationJsonUsers;
}(SpeakeasyBase));
export { GetLatestJson200ApplicationJsonUsers };
var GetLatestJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLatestJson200ApplicationJson, _super);
    function GetLatestJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_groups" }),
        __metadata("design:type", Array)
    ], GetLatestJson200ApplicationJson.prototype, "primaryGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_list" }),
        __metadata("design:type", GetLatestJson200ApplicationJsonTopicList)
    ], GetLatestJson200ApplicationJson.prototype, "topicList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: GetLatestJson200ApplicationJsonUsers }),
        __metadata("design:type", Array)
    ], GetLatestJson200ApplicationJson.prototype, "users", void 0);
    return GetLatestJson200ApplicationJson;
}(SpeakeasyBase));
export { GetLatestJson200ApplicationJson };
var GetLatestJsonRequest = /** @class */ (function (_super) {
    __extends(GetLatestJsonRequest, _super);
    function GetLatestJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestJsonQueryParams)
    ], GetLatestJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestJsonHeaders)
    ], GetLatestJsonRequest.prototype, "headers", void 0);
    return GetLatestJsonRequest;
}(SpeakeasyBase));
export { GetLatestJsonRequest };
var GetLatestJsonResponse = /** @class */ (function (_super) {
    __extends(GetLatestJsonResponse, _super);
    function GetLatestJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLatestJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestJson200ApplicationJson)
    ], GetLatestJsonResponse.prototype, "getLatestJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLatestJsonResponse.prototype, "statusCode", void 0);
    return GetLatestJsonResponse;
}(SpeakeasyBase));
export { GetLatestJsonResponse };
