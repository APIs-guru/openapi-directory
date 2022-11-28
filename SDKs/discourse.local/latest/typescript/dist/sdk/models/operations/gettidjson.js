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
var GetTIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetTIdJsonPathParams, _super);
    function GetTIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTIdJsonPathParams.prototype, "id", void 0);
    return GetTIdJsonPathParams;
}(SpeakeasyBase));
export { GetTIdJsonPathParams };
var GetTIdJsonHeaders = /** @class */ (function (_super) {
    __extends(GetTIdJsonHeaders, _super);
    function GetTIdJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], GetTIdJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], GetTIdJsonHeaders.prototype, "apiUsername", void 0);
    return GetTIdJsonHeaders;
}(SpeakeasyBase));
export { GetTIdJsonHeaders };
var GetTIdJson200ApplicationJsonActionsSummary = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonActionsSummary, _super);
    function GetTIdJson200ApplicationJsonActionsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_act" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonActionsSummary.prototype, "canAct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonActionsSummary.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonActionsSummary.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonActionsSummary.prototype, "id", void 0);
    return GetTIdJson200ApplicationJsonActionsSummary;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonActionsSummary };
var GetTIdJson200ApplicationJsonDetailsCreatedBy = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonDetailsCreatedBy, _super);
    function GetTIdJson200ApplicationJsonDetailsCreatedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsCreatedBy.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonDetailsCreatedBy.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsCreatedBy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsCreatedBy.prototype, "username", void 0);
    return GetTIdJson200ApplicationJsonDetailsCreatedBy;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonDetailsCreatedBy };
var GetTIdJson200ApplicationJsonDetailsLastPoster = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonDetailsLastPoster, _super);
    function GetTIdJson200ApplicationJsonDetailsLastPoster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsLastPoster.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonDetailsLastPoster.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsLastPoster.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsLastPoster.prototype, "username", void 0);
    return GetTIdJson200ApplicationJsonDetailsLastPoster;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonDetailsLastPoster };
var GetTIdJson200ApplicationJsonDetailsParticipants = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonDetailsParticipants, _super);
    function GetTIdJson200ApplicationJsonDetailsParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_bg_color" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "flairBgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_color" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "flairColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_name" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "flairName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_url" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "flairUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "postCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_name" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "primaryGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonDetailsParticipants.prototype, "username", void 0);
    return GetTIdJson200ApplicationJsonDetailsParticipants;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonDetailsParticipants };
var GetTIdJson200ApplicationJsonDetails = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonDetails, _super);
    function GetTIdJson200ApplicationJsonDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_convert_topic" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canConvertTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_create_post" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canCreatePost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_delete" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_flag_topic" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canFlagTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_move_posts" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canMovePosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_remove_allowed_users" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canRemoveAllowedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_remove_self_id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canRemoveSelfId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_reply_as_new_topic" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canReplyAsNewTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_review_topic" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "canReviewTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", GetTIdJson200ApplicationJsonDetailsCreatedBy)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_poster" }),
        __metadata("design:type", GetTIdJson200ApplicationJsonDetailsLastPoster)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "lastPoster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_level" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "notificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participants", elemType: GetTIdJson200ApplicationJsonDetailsParticipants }),
        __metadata("design:type", Array)
    ], GetTIdJson200ApplicationJsonDetails.prototype, "participants", void 0);
    return GetTIdJson200ApplicationJsonDetails;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonDetails };
var GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary, _super);
    function GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_act" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary.prototype, "canAct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary.prototype, "id", void 0);
    return GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary };
var GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts, _super);
    function GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clicks" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts.prototype, "clicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internal" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts.prototype, "internal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reflection" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts.prototype, "reflection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts.prototype, "url", void 0);
    return GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts };
var GetTIdJson200ApplicationJsonPostStreamPosts = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonPostStreamPosts, _super);
    function GetTIdJson200ApplicationJsonPostStreamPosts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions_summary", elemType: GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary }),
        __metadata("design:type", Array)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "actionsSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_delete" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_recover" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "canRecover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_view_edit_history" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "canViewEditHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_wiki" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "canWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cooked" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "cooked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "deletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_username" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "displayUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_reason" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "editReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_bg_color" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "flairBgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_color" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "flairColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_name" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "flairName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_url" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "flairUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_link_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "incomingLinkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_counts", elemType: GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts }),
        __metadata("design:type", Array)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "linkCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderator" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "moderator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_number" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "postNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_type" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "postType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_name" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "primaryGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quote_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "quoteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readers_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "readersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reads" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "reads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_to_post_number" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "replyToPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "reviewableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "reviewableScoreCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_pending_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "reviewableScorePendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staff" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "staff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "topicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_slug" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "topicSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trust_level" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "trustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_deleted" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "userDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_title" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "userTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wiki" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "wiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yours" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonPostStreamPosts.prototype, "yours", void 0);
    return GetTIdJson200ApplicationJsonPostStreamPosts;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonPostStreamPosts };
var GetTIdJson200ApplicationJsonPostStream = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonPostStream, _super);
    function GetTIdJson200ApplicationJsonPostStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts", elemType: GetTIdJson200ApplicationJsonPostStreamPosts }),
        __metadata("design:type", Array)
    ], GetTIdJson200ApplicationJsonPostStream.prototype, "posts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stream" }),
        __metadata("design:type", Array)
    ], GetTIdJson200ApplicationJsonPostStream.prototype, "stream", void 0);
    return GetTIdJson200ApplicationJsonPostStream;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonPostStream };
var GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser, _super);
    function GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser.prototype, "username", void 0);
    return GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser };
var GetTIdJson200ApplicationJsonSuggestedTopicsPosters = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonSuggestedTopicsPosters, _super);
    function GetTIdJson200ApplicationJsonSuggestedTopicsPosters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopicsPosters.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extras" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopicsPosters.prototype, "extras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser)
    ], GetTIdJson200ApplicationJsonSuggestedTopicsPosters.prototype, "user", void 0);
    return GetTIdJson200ApplicationJsonSuggestedTopicsPosters;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonSuggestedTopicsPosters };
var GetTIdJson200ApplicationJsonSuggestedTopics = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJsonSuggestedTopics, _super);
    function GetTIdJson200ApplicationJsonSuggestedTopics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archetype" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "archetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookmarked" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "bookmarked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bumped" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "bumped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bumped_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "bumpedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fancy_title" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "fancyTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured_link" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "featuredLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highest_post_number" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "highestPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_posted_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "lastPostedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_post_number" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "lastReadPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "likeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "liked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_level" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "notificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "pinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posters", elemType: GetTIdJson200ApplicationJsonSuggestedTopicsPosters }),
        __metadata("design:type", Array)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "posters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "postsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unpinned" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "unpinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unread_posts" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "unreadPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unseen" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "unseen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=views" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "views", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJsonSuggestedTopics.prototype, "visible", void 0);
    return GetTIdJson200ApplicationJsonSuggestedTopics;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJsonSuggestedTopics };
var GetTIdJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTIdJson200ApplicationJson, _super);
    function GetTIdJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions_summary", elemType: GetTIdJson200ApplicationJsonActionsSummary }),
        __metadata("design:type", Array)
    ], GetTIdJson200ApplicationJson.prototype, "actionsSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archetype" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "archetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJson.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookmarked" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJson.prototype, "bookmarked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chunk_size" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "chunkSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJson.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_post_number" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "currentPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "deletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_by" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "deletedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", GetTIdJson200ApplicationJsonDetails)
    ], GetTIdJson200ApplicationJson.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft_key" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "draftKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft_sequence" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "draftSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fancy_title" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "fancyTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured_link" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "featuredLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_deleted" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJson.prototype, "hasDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_summary" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJson.prototype, "hasSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highest_post_number" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "highestPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_posted_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "lastPostedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "likeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message_bus_last_id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "messageBusLastId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "participantCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJson.prototype, "pinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned_at" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "pinnedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned_globally" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJson.prototype, "pinnedGlobally", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned_until" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "pinnedUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_stream" }),
        __metadata("design:type", GetTIdJson200ApplicationJsonPostStream)
    ], GetTIdJson200ApplicationJson.prototype, "postStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "postsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_read_indicator" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJson.prototype, "showReadIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggested_topics", elemType: GetTIdJson200ApplicationJsonSuggestedTopics }),
        __metadata("design:type", Array)
    ], GetTIdJson200ApplicationJson.prototype, "suggestedTopics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnails" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "thumbnails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeline_lookup" }),
        __metadata("design:type", Array)
    ], GetTIdJson200ApplicationJson.prototype, "timelineLookup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_timer" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "topicTimer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unpinned" }),
        __metadata("design:type", String)
    ], GetTIdJson200ApplicationJson.prototype, "unpinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=views" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "views", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], GetTIdJson200ApplicationJson.prototype, "visible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=word_count" }),
        __metadata("design:type", Number)
    ], GetTIdJson200ApplicationJson.prototype, "wordCount", void 0);
    return GetTIdJson200ApplicationJson;
}(SpeakeasyBase));
export { GetTIdJson200ApplicationJson };
var GetTIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetTIdJsonRequest, _super);
    function GetTIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTIdJsonPathParams)
    ], GetTIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTIdJsonHeaders)
    ], GetTIdJsonRequest.prototype, "headers", void 0);
    return GetTIdJsonRequest;
}(SpeakeasyBase));
export { GetTIdJsonRequest };
var GetTIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetTIdJsonResponse, _super);
    function GetTIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTIdJson200ApplicationJson)
    ], GetTIdJsonResponse.prototype, "getTIdJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTIdJsonResponse.prototype, "statusCode", void 0);
    return GetTIdJsonResponse;
}(SpeakeasyBase));
export { GetTIdJsonResponse };
