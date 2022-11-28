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
var GetTopicsPrivateMessagesUsernameJsonPathParams = /** @class */ (function (_super) {
    __extends(GetTopicsPrivateMessagesUsernameJsonPathParams, _super);
    function GetTopicsPrivateMessagesUsernameJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJsonPathParams.prototype, "username", void 0);
    return GetTopicsPrivateMessagesUsernameJsonPathParams;
}(SpeakeasyBase));
export { GetTopicsPrivateMessagesUsernameJsonPathParams };
var GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants = /** @class */ (function (_super) {
    __extends(GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants, _super);
    function GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extras" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants.prototype, "extras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_id" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants.prototype, "primaryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants.prototype, "userId", void 0);
    return GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants;
}(SpeakeasyBase));
export { GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants };
var GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters = /** @class */ (function (_super) {
    __extends(GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters, _super);
    function GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extras" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters.prototype, "extras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_id" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters.prototype, "primaryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters.prototype, "userId", void 0);
    return GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters;
}(SpeakeasyBase));
export { GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters };
var GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics = /** @class */ (function (_super) {
    __extends(GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics, _super);
    function GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_user_count" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "allowedUserCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archetype" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "archetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookmarked" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "bookmarked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bumped" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "bumped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bumped_at" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "bumpedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fancy_title" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "fancyTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured_link" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "featuredLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_summary" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "hasSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highest_post_number" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "highestPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_posted_at" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "lastPostedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_poster_username" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "lastPosterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_post_number" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "lastReadPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like_count" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "likeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "liked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_level" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "notificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participants", elemType: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants }),
        __metadata("design:type", Array)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "participants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "pinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned_globally" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "pinnedGlobally", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posters", elemType: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters }),
        __metadata("design:type", Array)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "posters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts_count" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "postsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unpinned" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "unpinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unread_posts" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "unreadPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unseen" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "unseen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=views" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "views", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics.prototype, "visible", void 0);
    return GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics;
}(SpeakeasyBase));
export { GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics };
var GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList = /** @class */ (function (_super) {
    __extends(GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList, _super);
    function GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_create_topic" }),
        __metadata("design:type", Boolean)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList.prototype, "canCreateTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft_key" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList.prototype, "draftKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft_sequence" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList.prototype, "draftSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics", elemType: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics }),
        __metadata("design:type", Array)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList.prototype, "topics", void 0);
    return GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList;
}(SpeakeasyBase));
export { GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList };
var GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers = /** @class */ (function (_super) {
    __extends(GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers, _super);
    function GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers.prototype, "username", void 0);
    return GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers;
}(SpeakeasyBase));
export { GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers };
var GetTopicsPrivateMessagesUsernameJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTopicsPrivateMessagesUsernameJson200ApplicationJson, _super);
    function GetTopicsPrivateMessagesUsernameJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_groups" }),
        __metadata("design:type", Array)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJson.prototype, "primaryGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_list" }),
        __metadata("design:type", GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJson.prototype, "topicList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers }),
        __metadata("design:type", Array)
    ], GetTopicsPrivateMessagesUsernameJson200ApplicationJson.prototype, "users", void 0);
    return GetTopicsPrivateMessagesUsernameJson200ApplicationJson;
}(SpeakeasyBase));
export { GetTopicsPrivateMessagesUsernameJson200ApplicationJson };
var GetTopicsPrivateMessagesUsernameJsonRequest = /** @class */ (function (_super) {
    __extends(GetTopicsPrivateMessagesUsernameJsonRequest, _super);
    function GetTopicsPrivateMessagesUsernameJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTopicsPrivateMessagesUsernameJsonPathParams)
    ], GetTopicsPrivateMessagesUsernameJsonRequest.prototype, "pathParams", void 0);
    return GetTopicsPrivateMessagesUsernameJsonRequest;
}(SpeakeasyBase));
export { GetTopicsPrivateMessagesUsernameJsonRequest };
var GetTopicsPrivateMessagesUsernameJsonResponse = /** @class */ (function (_super) {
    __extends(GetTopicsPrivateMessagesUsernameJsonResponse, _super);
    function GetTopicsPrivateMessagesUsernameJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTopicsPrivateMessagesUsernameJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTopicsPrivateMessagesUsernameJson200ApplicationJson)
    ], GetTopicsPrivateMessagesUsernameJsonResponse.prototype, "getTopicsPrivateMessagesUsernameJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTopicsPrivateMessagesUsernameJsonResponse.prototype, "statusCode", void 0);
    return GetTopicsPrivateMessagesUsernameJsonResponse;
}(SpeakeasyBase));
export { GetTopicsPrivateMessagesUsernameJsonResponse };
