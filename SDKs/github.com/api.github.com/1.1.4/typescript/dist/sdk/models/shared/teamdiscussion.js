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
import { ReactionRollup } from "./reactionrollup";
var TeamDiscussionSimpleUser = /** @class */ (function (_super) {
    __extends(TeamDiscussionSimpleUser, _super);
    function TeamDiscussionSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamDiscussionSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], TeamDiscussionSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamDiscussionSimpleUser.prototype, "url", void 0);
    return TeamDiscussionSimpleUser;
}(SpeakeasyBase));
export { TeamDiscussionSimpleUser };
// TeamDiscussion
/**
 * A team discussion is a persistent record of a free-form conversation within a team.
**/
var TeamDiscussion = /** @class */ (function (_super) {
    __extends(TeamDiscussion, _super);
    function TeamDiscussion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", TeamDiscussionSimpleUser)
    ], TeamDiscussion.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], TeamDiscussion.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_html" }),
        __metadata("design:type", String)
    ], TeamDiscussion.prototype, "bodyHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_version" }),
        __metadata("design:type", String)
    ], TeamDiscussion.prototype, "bodyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_count" }),
        __metadata("design:type", Number)
    ], TeamDiscussion.prototype, "commentsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], TeamDiscussion.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], TeamDiscussion.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamDiscussion.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_edited_at" }),
        __metadata("design:type", Date)
    ], TeamDiscussion.prototype, "lastEditedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamDiscussion.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], TeamDiscussion.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned" }),
        __metadata("design:type", Boolean)
    ], TeamDiscussion.prototype, "pinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], TeamDiscussion.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reactions" }),
        __metadata("design:type", ReactionRollup)
    ], TeamDiscussion.prototype, "reactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_url" }),
        __metadata("design:type", String)
    ], TeamDiscussion.prototype, "teamUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TeamDiscussion.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], TeamDiscussion.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamDiscussion.prototype, "url", void 0);
    return TeamDiscussion;
}(SpeakeasyBase));
export { TeamDiscussion };
