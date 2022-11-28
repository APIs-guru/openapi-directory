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
var GetTagNameJsonPathParams = /** @class */ (function (_super) {
    __extends(GetTagNameJsonPathParams, _super);
    function GetTagNameJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetTagNameJsonPathParams.prototype, "name", void 0);
    return GetTagNameJsonPathParams;
}(SpeakeasyBase));
export { GetTagNameJsonPathParams };
var GetTagNameJson200ApplicationJsonTopicListTags = /** @class */ (function (_super) {
    __extends(GetTagNameJson200ApplicationJsonTopicListTags, _super);
    function GetTagNameJson200ApplicationJsonTopicListTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTags.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTags.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staff" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTags.prototype, "staff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_count" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTags.prototype, "topicCount", void 0);
    return GetTagNameJson200ApplicationJsonTopicListTags;
}(SpeakeasyBase));
export { GetTagNameJson200ApplicationJsonTopicListTags };
var GetTagNameJson200ApplicationJsonTopicListTopicsPosters = /** @class */ (function (_super) {
    __extends(GetTagNameJson200ApplicationJsonTopicListTopicsPosters, _super);
    function GetTagNameJson200ApplicationJsonTopicListTopicsPosters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopicsPosters.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extras" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopicsPosters.prototype, "extras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_id" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopicsPosters.prototype, "primaryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopicsPosters.prototype, "userId", void 0);
    return GetTagNameJson200ApplicationJsonTopicListTopicsPosters;
}(SpeakeasyBase));
export { GetTagNameJson200ApplicationJsonTopicListTopicsPosters };
var GetTagNameJson200ApplicationJsonTopicListTopics = /** @class */ (function (_super) {
    __extends(GetTagNameJson200ApplicationJsonTopicListTopics, _super);
    function GetTagNameJson200ApplicationJsonTopicListTopics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archetype" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "archetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookmarked" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "bookmarked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bumped" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "bumped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bumped_at" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "bumpedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fancy_title" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "fancyTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured_link" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "featuredLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_summary" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "hasSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highest_post_number" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "highestPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_posted_at" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "lastPostedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_poster_username" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "lastPosterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_post_number" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "lastReadPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like_count" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "likeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "liked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_level" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "notificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "pinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned_globally" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "pinnedGlobally", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posters", elemType: GetTagNameJson200ApplicationJsonTopicListTopicsPosters }),
        __metadata("design:type", Array)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "posters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts_count" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "postsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unpinned" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "unpinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unread_posts" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "unreadPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unseen" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "unseen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=views" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "views", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicListTopics.prototype, "visible", void 0);
    return GetTagNameJson200ApplicationJsonTopicListTopics;
}(SpeakeasyBase));
export { GetTagNameJson200ApplicationJsonTopicListTopics };
var GetTagNameJson200ApplicationJsonTopicList = /** @class */ (function (_super) {
    __extends(GetTagNameJson200ApplicationJsonTopicList, _super);
    function GetTagNameJson200ApplicationJsonTopicList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_create_topic" }),
        __metadata("design:type", Boolean)
    ], GetTagNameJson200ApplicationJsonTopicList.prototype, "canCreateTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicList.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft_key" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonTopicList.prototype, "draftKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft_sequence" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicList.prototype, "draftSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonTopicList.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: GetTagNameJson200ApplicationJsonTopicListTags }),
        __metadata("design:type", Array)
    ], GetTagNameJson200ApplicationJsonTopicList.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics", elemType: GetTagNameJson200ApplicationJsonTopicListTopics }),
        __metadata("design:type", Array)
    ], GetTagNameJson200ApplicationJsonTopicList.prototype, "topics", void 0);
    return GetTagNameJson200ApplicationJsonTopicList;
}(SpeakeasyBase));
export { GetTagNameJson200ApplicationJsonTopicList };
var GetTagNameJson200ApplicationJsonUsers = /** @class */ (function (_super) {
    __extends(GetTagNameJson200ApplicationJsonUsers, _super);
    function GetTagNameJson200ApplicationJsonUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonUsers.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTagNameJson200ApplicationJsonUsers.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonUsers.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetTagNameJson200ApplicationJsonUsers.prototype, "username", void 0);
    return GetTagNameJson200ApplicationJsonUsers;
}(SpeakeasyBase));
export { GetTagNameJson200ApplicationJsonUsers };
var GetTagNameJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTagNameJson200ApplicationJson, _super);
    function GetTagNameJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_groups" }),
        __metadata("design:type", Array)
    ], GetTagNameJson200ApplicationJson.prototype, "primaryGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_list" }),
        __metadata("design:type", GetTagNameJson200ApplicationJsonTopicList)
    ], GetTagNameJson200ApplicationJson.prototype, "topicList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: GetTagNameJson200ApplicationJsonUsers }),
        __metadata("design:type", Array)
    ], GetTagNameJson200ApplicationJson.prototype, "users", void 0);
    return GetTagNameJson200ApplicationJson;
}(SpeakeasyBase));
export { GetTagNameJson200ApplicationJson };
var GetTagNameJsonRequest = /** @class */ (function (_super) {
    __extends(GetTagNameJsonRequest, _super);
    function GetTagNameJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagNameJsonPathParams)
    ], GetTagNameJsonRequest.prototype, "pathParams", void 0);
    return GetTagNameJsonRequest;
}(SpeakeasyBase));
export { GetTagNameJsonRequest };
var GetTagNameJsonResponse = /** @class */ (function (_super) {
    __extends(GetTagNameJsonResponse, _super);
    function GetTagNameJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagNameJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagNameJson200ApplicationJson)
    ], GetTagNameJsonResponse.prototype, "getTagNameJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagNameJsonResponse.prototype, "statusCode", void 0);
    return GetTagNameJsonResponse;
}(SpeakeasyBase));
export { GetTagNameJsonResponse };
