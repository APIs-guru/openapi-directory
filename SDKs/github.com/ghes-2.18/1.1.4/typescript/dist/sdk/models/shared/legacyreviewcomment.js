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
var LegacyReviewCommentLinksHtml = /** @class */ (function (_super) {
    __extends(LegacyReviewCommentLinksHtml, _super);
    function LegacyReviewCommentLinksHtml() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentLinksHtml.prototype, "href", void 0);
    return LegacyReviewCommentLinksHtml;
}(SpeakeasyBase));
export { LegacyReviewCommentLinksHtml };
var LegacyReviewCommentLinksPullRequest = /** @class */ (function (_super) {
    __extends(LegacyReviewCommentLinksPullRequest, _super);
    function LegacyReviewCommentLinksPullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentLinksPullRequest.prototype, "href", void 0);
    return LegacyReviewCommentLinksPullRequest;
}(SpeakeasyBase));
export { LegacyReviewCommentLinksPullRequest };
var LegacyReviewCommentLinksSelf = /** @class */ (function (_super) {
    __extends(LegacyReviewCommentLinksSelf, _super);
    function LegacyReviewCommentLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentLinksSelf.prototype, "href", void 0);
    return LegacyReviewCommentLinksSelf;
}(SpeakeasyBase));
export { LegacyReviewCommentLinksSelf };
var LegacyReviewCommentLinks = /** @class */ (function (_super) {
    __extends(LegacyReviewCommentLinks, _super);
    function LegacyReviewCommentLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", LegacyReviewCommentLinksHtml)
    ], LegacyReviewCommentLinks.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_request" }),
        __metadata("design:type", LegacyReviewCommentLinksPullRequest)
    ], LegacyReviewCommentLinks.prototype, "pullRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", LegacyReviewCommentLinksSelf)
    ], LegacyReviewCommentLinks.prototype, "self", void 0);
    return LegacyReviewCommentLinks;
}(SpeakeasyBase));
export { LegacyReviewCommentLinks };
var LegacyReviewCommentUser = /** @class */ (function (_super) {
    __extends(LegacyReviewCommentUser, _super);
    function LegacyReviewCommentUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], LegacyReviewCommentUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], LegacyReviewCommentUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], LegacyReviewCommentUser.prototype, "url", void 0);
    return LegacyReviewCommentUser;
}(SpeakeasyBase));
export { LegacyReviewCommentUser };
var LegacyReviewComment = /** @class */ (function (_super) {
    __extends(LegacyReviewComment, _super);
    function LegacyReviewComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", LegacyReviewCommentLinks)
    ], LegacyReviewComment.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_association" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "authorAssociation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_id" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "commitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diff_hunk" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "diffHunk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], LegacyReviewComment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in_reply_to_id" }),
        __metadata("design:type", Number)
    ], LegacyReviewComment.prototype, "inReplyToId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_commit_id" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "originalCommitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_position" }),
        __metadata("design:type", Number)
    ], LegacyReviewComment.prototype, "originalPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], LegacyReviewComment.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_request_review_id" }),
        __metadata("design:type", Number)
    ], LegacyReviewComment.prototype, "pullRequestReviewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_request_url" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "pullRequestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], LegacyReviewComment.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", LegacyReviewCommentUser)
    ], LegacyReviewComment.prototype, "user", void 0);
    return LegacyReviewComment;
}(SpeakeasyBase));
export { LegacyReviewComment };
