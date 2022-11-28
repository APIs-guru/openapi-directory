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
import { Link } from "./link";
import { AuthorAssociationEnum } from "./authorassociationenum";
var ReviewCommentLinks = /** @class */ (function (_super) {
    __extends(ReviewCommentLinks, _super);
    function ReviewCommentLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", Link)
    ], ReviewCommentLinks.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_request" }),
        __metadata("design:type", Link)
    ], ReviewCommentLinks.prototype, "pullRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", Link)
    ], ReviewCommentLinks.prototype, "self", void 0);
    return ReviewCommentLinks;
}(SpeakeasyBase));
export { ReviewCommentLinks };
export var ReviewCommentSideEnum;
(function (ReviewCommentSideEnum) {
    ReviewCommentSideEnum["Left"] = "LEFT";
    ReviewCommentSideEnum["Right"] = "RIGHT";
})(ReviewCommentSideEnum || (ReviewCommentSideEnum = {}));
export var ReviewCommentStartSideEnum;
(function (ReviewCommentStartSideEnum) {
    ReviewCommentStartSideEnum["Left"] = "LEFT";
    ReviewCommentStartSideEnum["Right"] = "RIGHT";
})(ReviewCommentStartSideEnum || (ReviewCommentStartSideEnum = {}));
var ReviewCommentSimpleUser = /** @class */ (function (_super) {
    __extends(ReviewCommentSimpleUser, _super);
    function ReviewCommentSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReviewCommentSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], ReviewCommentSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ReviewCommentSimpleUser.prototype, "url", void 0);
    return ReviewCommentSimpleUser;
}(SpeakeasyBase));
export { ReviewCommentSimpleUser };
// ReviewComment
/**
 * Legacy Review Comment
**/
var ReviewComment = /** @class */ (function (_super) {
    __extends(ReviewComment, _super);
    function ReviewComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", ReviewCommentLinks)
    ], ReviewComment.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_association" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "authorAssociation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_html" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "bodyHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_text" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "bodyText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_id" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "commitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ReviewComment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diff_hunk" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "diffHunk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReviewComment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in_reply_to_id" }),
        __metadata("design:type", Number)
    ], ReviewComment.prototype, "inReplyToId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line" }),
        __metadata("design:type", Number)
    ], ReviewComment.prototype, "line", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_commit_id" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "originalCommitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_line" }),
        __metadata("design:type", Number)
    ], ReviewComment.prototype, "originalLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_position" }),
        __metadata("design:type", Number)
    ], ReviewComment.prototype, "originalPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_start_line" }),
        __metadata("design:type", Number)
    ], ReviewComment.prototype, "originalStartLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], ReviewComment.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_request_review_id" }),
        __metadata("design:type", Number)
    ], ReviewComment.prototype, "pullRequestReviewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_request_url" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "pullRequestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=side" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "side", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_line" }),
        __metadata("design:type", Number)
    ], ReviewComment.prototype, "startLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_side" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "startSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ReviewComment.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ReviewComment.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", ReviewCommentSimpleUser)
    ], ReviewComment.prototype, "user", void 0);
    return ReviewComment;
}(SpeakeasyBase));
export { ReviewComment };
