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
var PutPostsIdJsonPathParams = /** @class */ (function (_super) {
    __extends(PutPostsIdJsonPathParams, _super);
    function PutPostsIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutPostsIdJsonPathParams.prototype, "id", void 0);
    return PutPostsIdJsonPathParams;
}(SpeakeasyBase));
export { PutPostsIdJsonPathParams };
var PutPostsIdJsonHeaders = /** @class */ (function (_super) {
    __extends(PutPostsIdJsonHeaders, _super);
    function PutPostsIdJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PutPostsIdJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PutPostsIdJsonHeaders.prototype, "apiUsername", void 0);
    return PutPostsIdJsonHeaders;
}(SpeakeasyBase));
export { PutPostsIdJsonHeaders };
var PutPostsIdJsonRequestBodyPost = /** @class */ (function (_super) {
    __extends(PutPostsIdJsonRequestBodyPost, _super);
    function PutPostsIdJsonRequestBodyPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_reason" }),
        __metadata("design:type", String)
    ], PutPostsIdJsonRequestBodyPost.prototype, "editReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw" }),
        __metadata("design:type", String)
    ], PutPostsIdJsonRequestBodyPost.prototype, "raw", void 0);
    return PutPostsIdJsonRequestBodyPost;
}(SpeakeasyBase));
export { PutPostsIdJsonRequestBodyPost };
var PutPostsIdJsonRequestBody = /** @class */ (function (_super) {
    __extends(PutPostsIdJsonRequestBody, _super);
    function PutPostsIdJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post" }),
        __metadata("design:type", PutPostsIdJsonRequestBodyPost)
    ], PutPostsIdJsonRequestBody.prototype, "post", void 0);
    return PutPostsIdJsonRequestBody;
}(SpeakeasyBase));
export { PutPostsIdJsonRequestBody };
var PutPostsIdJson200ApplicationJsonPostActionsSummary = /** @class */ (function (_super) {
    __extends(PutPostsIdJson200ApplicationJsonPostActionsSummary, _super);
    function PutPostsIdJson200ApplicationJsonPostActionsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_act" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPostActionsSummary.prototype, "canAct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPostActionsSummary.prototype, "id", void 0);
    return PutPostsIdJson200ApplicationJsonPostActionsSummary;
}(SpeakeasyBase));
export { PutPostsIdJson200ApplicationJsonPostActionsSummary };
var PutPostsIdJson200ApplicationJsonPost = /** @class */ (function (_super) {
    __extends(PutPostsIdJson200ApplicationJsonPost, _super);
    function PutPostsIdJson200ApplicationJsonPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions_summary", elemType: PutPostsIdJson200ApplicationJsonPostActionsSummary }),
        __metadata("design:type", Array)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "actionsSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_delete" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_recover" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "canRecover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_view_edit_history" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "canViewEditHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_wiki" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "canWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cooked" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "cooked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_at" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "deletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_username" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "displayUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft_sequence" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "draftSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_reason" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "editReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_bg_color" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "flairBgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_color" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "flairColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_url" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "flairUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_link_count" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "incomingLinkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderator" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "moderator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_number" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "postNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_type" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "postType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_name" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "primaryGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quote_count" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "quoteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readers_count" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "readersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reads" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "reads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_count" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_to_post_number" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "replyToPostNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_id" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "reviewableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_count" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "reviewableScoreCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewable_score_pending_count" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "reviewableScorePendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staff" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "staff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_id" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "topicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_slug" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "topicSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trust_level" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "trustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_deleted" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "userDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_title" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "userTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wiki" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "wiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yours" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdJson200ApplicationJsonPost.prototype, "yours", void 0);
    return PutPostsIdJson200ApplicationJsonPost;
}(SpeakeasyBase));
export { PutPostsIdJson200ApplicationJsonPost };
var PutPostsIdJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutPostsIdJson200ApplicationJson, _super);
    function PutPostsIdJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post" }),
        __metadata("design:type", PutPostsIdJson200ApplicationJsonPost)
    ], PutPostsIdJson200ApplicationJson.prototype, "post", void 0);
    return PutPostsIdJson200ApplicationJson;
}(SpeakeasyBase));
export { PutPostsIdJson200ApplicationJson };
var PutPostsIdJsonRequest = /** @class */ (function (_super) {
    __extends(PutPostsIdJsonRequest, _super);
    function PutPostsIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPostsIdJsonPathParams)
    ], PutPostsIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPostsIdJsonHeaders)
    ], PutPostsIdJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutPostsIdJsonRequestBody)
    ], PutPostsIdJsonRequest.prototype, "request", void 0);
    return PutPostsIdJsonRequest;
}(SpeakeasyBase));
export { PutPostsIdJsonRequest };
var PutPostsIdJsonResponse = /** @class */ (function (_super) {
    __extends(PutPostsIdJsonResponse, _super);
    function PutPostsIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutPostsIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPostsIdJson200ApplicationJson)
    ], PutPostsIdJsonResponse.prototype, "putPostsIdJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutPostsIdJsonResponse.prototype, "statusCode", void 0);
    return PutPostsIdJsonResponse;
}(SpeakeasyBase));
export { PutPostsIdJsonResponse };
