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
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { Repository } from "./repository";
import { SearchResultTextMatches } from "./searchresulttextmatches";
var IssueSearchResultItemSimpleUser = /** @class */ (function (_super) {
    __extends(IssueSearchResultItemSimpleUser, _super);
    function IssueSearchResultItemSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItemSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], IssueSearchResultItemSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemSimpleUser.prototype, "url", void 0);
    return IssueSearchResultItemSimpleUser;
}(SpeakeasyBase));
export { IssueSearchResultItemSimpleUser };
var IssueSearchResultItemLabels = /** @class */ (function (_super) {
    __extends(IssueSearchResultItemLabels, _super);
    function IssueSearchResultItemLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default" }),
        __metadata("design:type", Boolean)
    ], IssueSearchResultItemLabels.prototype, "default", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItemLabels.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemLabels.prototype, "url", void 0);
    return IssueSearchResultItemLabels;
}(SpeakeasyBase));
export { IssueSearchResultItemLabels };
var IssueSearchResultItemMilestoneSimpleUser = /** @class */ (function (_super) {
    __extends(IssueSearchResultItemMilestoneSimpleUser, _super);
    function IssueSearchResultItemMilestoneSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestoneSimpleUser.prototype, "url", void 0);
    return IssueSearchResultItemMilestoneSimpleUser;
}(SpeakeasyBase));
export { IssueSearchResultItemMilestoneSimpleUser };
export var IssueSearchResultItemMilestoneStateEnum;
(function (IssueSearchResultItemMilestoneStateEnum) {
    IssueSearchResultItemMilestoneStateEnum["Open"] = "open";
    IssueSearchResultItemMilestoneStateEnum["Closed"] = "closed";
})(IssueSearchResultItemMilestoneStateEnum || (IssueSearchResultItemMilestoneStateEnum = {}));
var IssueSearchResultItemMilestone = /** @class */ (function (_super) {
    __extends(IssueSearchResultItemMilestone, _super);
    function IssueSearchResultItemMilestone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_at" }),
        __metadata("design:type", Date)
    ], IssueSearchResultItemMilestone.prototype, "closedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_issues" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItemMilestone.prototype, "closedIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], IssueSearchResultItemMilestone.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", IssueSearchResultItemMilestoneSimpleUser)
    ], IssueSearchResultItemMilestone.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestone.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], IssueSearchResultItemMilestone.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestone.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItemMilestone.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestone.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestone.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItemMilestone.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItemMilestone.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestone.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestone.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], IssueSearchResultItemMilestone.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemMilestone.prototype, "url", void 0);
    return IssueSearchResultItemMilestone;
}(SpeakeasyBase));
export { IssueSearchResultItemMilestone };
var IssueSearchResultItemPullRequest = /** @class */ (function (_super) {
    __extends(IssueSearchResultItemPullRequest, _super);
    function IssueSearchResultItemPullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diff_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemPullRequest.prototype, "diffUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemPullRequest.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merged_at" }),
        __metadata("design:type", Date)
    ], IssueSearchResultItemPullRequest.prototype, "mergedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patch_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemPullRequest.prototype, "patchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItemPullRequest.prototype, "url", void 0);
    return IssueSearchResultItemPullRequest;
}(SpeakeasyBase));
export { IssueSearchResultItemPullRequest };
// IssueSearchResultItem
/**
 * Issue Search Result Item
**/
var IssueSearchResultItem = /** @class */ (function (_super) {
    __extends(IssueSearchResultItem, _super);
    function IssueSearchResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_lock_reason" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "activeLockReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee" }),
        __metadata("design:type", IssueSearchResultItemSimpleUser)
    ], IssueSearchResultItem.prototype, "assignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees", elemType: SimpleUser }),
        __metadata("design:type", Array)
    ], IssueSearchResultItem.prototype, "assignees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_association" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "authorAssociation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_html" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "bodyHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_text" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "bodyText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_at" }),
        __metadata("design:type", Date)
    ], IssueSearchResultItem.prototype, "closedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItem.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], IssueSearchResultItem.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", Boolean)
    ], IssueSearchResultItem.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: IssueSearchResultItemLabels }),
        __metadata("design:type", Array)
    ], IssueSearchResultItem.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], IssueSearchResultItem.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestone" }),
        __metadata("design:type", IssueSearchResultItemMilestone)
    ], IssueSearchResultItem.prototype, "milestone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItem.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performed_via_github_app" }),
        __metadata("design:type", Map)
    ], IssueSearchResultItem.prototype, "performedViaGithubApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_request" }),
        __metadata("design:type", IssueSearchResultItemPullRequest)
    ], IssueSearchResultItem.prototype, "pullRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", Repository)
    ], IssueSearchResultItem.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "repositoryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], IssueSearchResultItem.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text_matches", elemType: SearchResultTextMatches }),
        __metadata("design:type", Array)
    ], IssueSearchResultItem.prototype, "textMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeline_url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "timelineUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], IssueSearchResultItem.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueSearchResultItem.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", IssueSearchResultItemSimpleUser)
    ], IssueSearchResultItem.prototype, "user", void 0);
    return IssueSearchResultItem;
}(SpeakeasyBase));
export { IssueSearchResultItem };
