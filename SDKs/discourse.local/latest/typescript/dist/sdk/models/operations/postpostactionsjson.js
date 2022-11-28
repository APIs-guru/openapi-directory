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
var PostPostActionsJsonHeaders = /** @class */ (function (_super) {
    __extends(PostPostActionsJsonHeaders, _super);
    function PostPostActionsJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PostPostActionsJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PostPostActionsJsonHeaders.prototype, "apiUsername", void 0);
    return PostPostActionsJsonHeaders;
}(SpeakeasyBase));
export { PostPostActionsJsonHeaders };
var PostPostActionsJsonRequestBody = /** @class */ (function (_super) {
    __extends(PostPostActionsJsonRequestBody, _super);
    function PostPostActionsJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flag_topic" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJsonRequestBody.prototype, "flagTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostPostActionsJsonRequestBody.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_action_type_id" }),
        __metadata("design:type", Number)
    ], PostPostActionsJsonRequestBody.prototype, "postActionTypeId", void 0);
    return PostPostActionsJsonRequestBody;
}(SpeakeasyBase));
export { PostPostActionsJsonRequestBody };
var PostPostActionsJson200ApplicationJsonActionsSummary = /** @class */ (function (_super) {
    __extends(PostPostActionsJson200ApplicationJsonActionsSummary, _super);
    function PostPostActionsJson200ApplicationJsonActionsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acted" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJsonActionsSummary.prototype, "acted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_undo" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJsonActionsSummary.prototype, "canUndo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJsonActionsSummary.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJsonActionsSummary.prototype, "id", void 0);
    return PostPostActionsJson200ApplicationJsonActionsSummary;
}(SpeakeasyBase));
export { PostPostActionsJson200ApplicationJsonActionsSummary };
var PostPostActionsJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPostActionsJson200ApplicationJson, _super);
    function PostPostActionsJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions_summary", elemType: PostPostActionsJson200ApplicationJsonActionsSummary }),
        __metadata("design:type", Array)
    ], PostPostActionsJson200ApplicationJson.prototype, "actionsSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_delete" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_recover" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "canRecover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_view_edit_history" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "canViewEditHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_wiki" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "canWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cooked" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "cooked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_at" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "deletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_username" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "displayUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_reason" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "editReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_bg_color" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "flairBgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_color" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "flairColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_name" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "flairName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_url" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "flairUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_link_count" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "incomingLinkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderator" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "moderator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notice" }),
        __metadata("design:type", Map)
    ], PostPostActionsJson200ApplicationJson.prototype, "notice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_number" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "postNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_type" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "postType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_name" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "primaryGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quote_count" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "quoteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readers_count" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "readersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reads" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "reads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_to_post_number" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "replyToPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_id" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "reviewableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_count" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "reviewableScoreCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_pending_count" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "reviewableScorePendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staff" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "staff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_id" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "topicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_slug" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "topicSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trust_level" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "trustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_deleted" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "userDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_title" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "userTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostPostActionsJson200ApplicationJson.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], PostPostActionsJson200ApplicationJson.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wiki" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "wiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yours" }),
        __metadata("design:type", Boolean)
    ], PostPostActionsJson200ApplicationJson.prototype, "yours", void 0);
    return PostPostActionsJson200ApplicationJson;
}(SpeakeasyBase));
export { PostPostActionsJson200ApplicationJson };
var PostPostActionsJsonRequest = /** @class */ (function (_super) {
    __extends(PostPostActionsJsonRequest, _super);
    function PostPostActionsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPostActionsJsonHeaders)
    ], PostPostActionsJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPostActionsJsonRequestBody)
    ], PostPostActionsJsonRequest.prototype, "request", void 0);
    return PostPostActionsJsonRequest;
}(SpeakeasyBase));
export { PostPostActionsJsonRequest };
var PostPostActionsJsonResponse = /** @class */ (function (_super) {
    __extends(PostPostActionsJsonResponse, _super);
    function PostPostActionsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPostActionsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPostActionsJson200ApplicationJson)
    ], PostPostActionsJsonResponse.prototype, "postPostActionsJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPostActionsJsonResponse.prototype, "statusCode", void 0);
    return PostPostActionsJsonResponse;
}(SpeakeasyBase));
export { PostPostActionsJsonResponse };
