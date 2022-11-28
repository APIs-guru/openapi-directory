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
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { AutoMerge } from "./automerge";
import { Repository } from "./repository";
import { TeamSimple } from "./teamsimple";
var PullRequestSimpleLinks = /** @class */ (function (_super) {
    __extends(PullRequestSimpleLinks, _super);
    function PullRequestSimpleLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", Link)
    ], PullRequestSimpleLinks.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits" }),
        __metadata("design:type", Link)
    ], PullRequestSimpleLinks.prototype, "commits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", Link)
    ], PullRequestSimpleLinks.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue" }),
        __metadata("design:type", Link)
    ], PullRequestSimpleLinks.prototype, "issue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_comment" }),
        __metadata("design:type", Link)
    ], PullRequestSimpleLinks.prototype, "reviewComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_comments" }),
        __metadata("design:type", Link)
    ], PullRequestSimpleLinks.prototype, "reviewComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", Link)
    ], PullRequestSimpleLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses" }),
        __metadata("design:type", Link)
    ], PullRequestSimpleLinks.prototype, "statuses", void 0);
    return PullRequestSimpleLinks;
}(SpeakeasyBase));
export { PullRequestSimpleLinks };
var PullRequestSimpleSimpleUser = /** @class */ (function (_super) {
    __extends(PullRequestSimpleSimpleUser, _super);
    function PullRequestSimpleSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimpleSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleSimpleUser.prototype, "url", void 0);
    return PullRequestSimpleSimpleUser;
}(SpeakeasyBase));
export { PullRequestSimpleSimpleUser };
var PullRequestSimpleBaseSimpleUser = /** @class */ (function (_super) {
    __extends(PullRequestSimpleBaseSimpleUser, _super);
    function PullRequestSimpleBaseSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleBaseSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimpleBaseSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBaseSimpleUser.prototype, "url", void 0);
    return PullRequestSimpleBaseSimpleUser;
}(SpeakeasyBase));
export { PullRequestSimpleBaseSimpleUser };
var PullRequestSimpleBase = /** @class */ (function (_super) {
    __extends(PullRequestSimpleBase, _super);
    function PullRequestSimpleBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBase.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBase.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repo" }),
        __metadata("design:type", Repository)
    ], PullRequestSimpleBase.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBase.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", PullRequestSimpleBaseSimpleUser)
    ], PullRequestSimpleBase.prototype, "user", void 0);
    return PullRequestSimpleBase;
}(SpeakeasyBase));
export { PullRequestSimpleBase };
var PullRequestSimpleHeadSimpleUser = /** @class */ (function (_super) {
    __extends(PullRequestSimpleHeadSimpleUser, _super);
    function PullRequestSimpleHeadSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleHeadSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimpleHeadSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHeadSimpleUser.prototype, "url", void 0);
    return PullRequestSimpleHeadSimpleUser;
}(SpeakeasyBase));
export { PullRequestSimpleHeadSimpleUser };
var PullRequestSimpleHead = /** @class */ (function (_super) {
    __extends(PullRequestSimpleHead, _super);
    function PullRequestSimpleHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHead.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHead.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repo" }),
        __metadata("design:type", Repository)
    ], PullRequestSimpleHead.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHead.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", PullRequestSimpleHeadSimpleUser)
    ], PullRequestSimpleHead.prototype, "user", void 0);
    return PullRequestSimpleHead;
}(SpeakeasyBase));
export { PullRequestSimpleHead };
var PullRequestSimpleLabels = /** @class */ (function (_super) {
    __extends(PullRequestSimpleLabels, _super);
    function PullRequestSimpleLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimpleLabels.prototype, "default", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleLabels.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "url", void 0);
    return PullRequestSimpleLabels;
}(SpeakeasyBase));
export { PullRequestSimpleLabels };
var PullRequestSimpleMilestoneSimpleUser = /** @class */ (function (_super) {
    __extends(PullRequestSimpleMilestoneSimpleUser, _super);
    function PullRequestSimpleMilestoneSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestoneSimpleUser.prototype, "url", void 0);
    return PullRequestSimpleMilestoneSimpleUser;
}(SpeakeasyBase));
export { PullRequestSimpleMilestoneSimpleUser };
export var PullRequestSimpleMilestoneStateEnum;
(function (PullRequestSimpleMilestoneStateEnum) {
    PullRequestSimpleMilestoneStateEnum["Open"] = "open";
    PullRequestSimpleMilestoneStateEnum["Closed"] = "closed";
})(PullRequestSimpleMilestoneStateEnum || (PullRequestSimpleMilestoneStateEnum = {}));
var PullRequestSimpleMilestone = /** @class */ (function (_super) {
    __extends(PullRequestSimpleMilestone, _super);
    function PullRequestSimpleMilestone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_at" }),
        __metadata("design:type", Date)
    ], PullRequestSimpleMilestone.prototype, "closedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_issues" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleMilestone.prototype, "closedIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PullRequestSimpleMilestone.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", PullRequestSimpleMilestoneSimpleUser)
    ], PullRequestSimpleMilestone.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestone.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], PullRequestSimpleMilestone.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestone.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleMilestone.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestone.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestone.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleMilestone.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleMilestone.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestone.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestone.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PullRequestSimpleMilestone.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleMilestone.prototype, "url", void 0);
    return PullRequestSimpleMilestone;
}(SpeakeasyBase));
export { PullRequestSimpleMilestone };
// PullRequestSimple
/**
 * Pull Request Simple
**/
var PullRequestSimple = /** @class */ (function (_super) {
    __extends(PullRequestSimple, _super);
    function PullRequestSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", PullRequestSimpleLinks)
    ], PullRequestSimple.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_lock_reason" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "activeLockReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee" }),
        __metadata("design:type", PullRequestSimpleSimpleUser)
    ], PullRequestSimple.prototype, "assignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees", elemType: SimpleUser }),
        __metadata("design:type", Array)
    ], PullRequestSimple.prototype, "assignees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_association" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "authorAssociation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_merge" }),
        __metadata("design:type", AutoMerge)
    ], PullRequestSimple.prototype, "autoMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base" }),
        __metadata("design:type", PullRequestSimpleBase)
    ], PullRequestSimple.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_at" }),
        __metadata("design:type", Date)
    ], PullRequestSimple.prototype, "closedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PullRequestSimple.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diff_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "diffUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimple.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head" }),
        __metadata("design:type", PullRequestSimpleHead)
    ], PullRequestSimple.prototype, "head", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestSimple.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "issueUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: PullRequestSimpleLabels }),
        __metadata("design:type", Array)
    ], PullRequestSimple.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimple.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merge_commit_sha" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "mergeCommitSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merged_at" }),
        __metadata("design:type", Date)
    ], PullRequestSimple.prototype, "mergedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestone" }),
        __metadata("design:type", PullRequestSimpleMilestone)
    ], PullRequestSimple.prototype, "milestone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], PullRequestSimple.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patch_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "patchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requested_reviewers", elemType: SimpleUser }),
        __metadata("design:type", Array)
    ], PullRequestSimple.prototype, "requestedReviewers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requested_teams", elemType: TeamSimple }),
        __metadata("design:type", Array)
    ], PullRequestSimple.prototype, "requestedTeams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_comment_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "reviewCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_comments_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "reviewCommentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PullRequestSimple.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", PullRequestSimpleSimpleUser)
    ], PullRequestSimple.prototype, "user", void 0);
    return PullRequestSimple;
}(SpeakeasyBase));
export { PullRequestSimple };
