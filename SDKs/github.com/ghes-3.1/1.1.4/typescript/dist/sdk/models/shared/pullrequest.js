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
import { TeamSimple } from "./teamsimple";
var PullRequestLinks = /** @class */ (function (_super) {
    __extends(PullRequestLinks, _super);
    function PullRequestLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", Link)
    ], PullRequestLinks.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits" }),
        __metadata("design:type", Link)
    ], PullRequestLinks.prototype, "commits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", Link)
    ], PullRequestLinks.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue" }),
        __metadata("design:type", Link)
    ], PullRequestLinks.prototype, "issue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_comment" }),
        __metadata("design:type", Link)
    ], PullRequestLinks.prototype, "reviewComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_comments" }),
        __metadata("design:type", Link)
    ], PullRequestLinks.prototype, "reviewComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", Link)
    ], PullRequestLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses" }),
        __metadata("design:type", Link)
    ], PullRequestLinks.prototype, "statuses", void 0);
    return PullRequestLinks;
}(SpeakeasyBase));
export { PullRequestLinks };
var PullRequestSimpleUser = /** @class */ (function (_super) {
    __extends(PullRequestSimpleUser, _super);
    function PullRequestSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleUser.prototype, "url", void 0);
    return PullRequestSimpleUser;
}(SpeakeasyBase));
export { PullRequestSimpleUser };
var PullRequestBaseRepoLicenseSimple = /** @class */ (function (_super) {
    __extends(PullRequestBaseRepoLicenseSimple, _super);
    function PullRequestBaseRepoLicenseSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoLicenseSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoLicenseSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoLicenseSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoLicenseSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoLicenseSimple.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoLicenseSimple.prototype, "url", void 0);
    return PullRequestBaseRepoLicenseSimple;
}(SpeakeasyBase));
export { PullRequestBaseRepoLicenseSimple };
var PullRequestBaseRepoOwner = /** @class */ (function (_super) {
    __extends(PullRequestBaseRepoOwner, _super);
    function PullRequestBaseRepoOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepoOwner.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepoOwner.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepoOwner.prototype, "url", void 0);
    return PullRequestBaseRepoOwner;
}(SpeakeasyBase));
export { PullRequestBaseRepoOwner };
var PullRequestBaseRepoPermissions = /** @class */ (function (_super) {
    __extends(PullRequestBaseRepoPermissions, _super);
    function PullRequestBaseRepoPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepoPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepoPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepoPermissions.prototype, "push", void 0);
    return PullRequestBaseRepoPermissions;
}(SpeakeasyBase));
export { PullRequestBaseRepoPermissions };
var PullRequestBaseRepo = /** @class */ (function (_super) {
    __extends(PullRequestBaseRepo, _super);
    function PullRequestBaseRepo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PullRequestBaseRepo.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepo.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepo.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", PullRequestBaseRepoLicenseSimple)
    ], PullRequestBaseRepo.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_branch" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "masterBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepo.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepo.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", PullRequestBaseRepoOwner)
    ], PullRequestBaseRepo.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", PullRequestBaseRepoPermissions)
    ], PullRequestBaseRepo.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseRepo.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", Date)
    ], PullRequestBaseRepo.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepo.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepo.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], PullRequestBaseRepo.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PullRequestBaseRepo.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestBaseRepo.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepo.prototype, "watchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], PullRequestBaseRepo.prototype, "watchersCount", void 0);
    return PullRequestBaseRepo;
}(SpeakeasyBase));
export { PullRequestBaseRepo };
var PullRequestBaseUser = /** @class */ (function (_super) {
    __extends(PullRequestBaseUser, _super);
    function PullRequestBaseUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestBaseUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestBaseUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestBaseUser.prototype, "url", void 0);
    return PullRequestBaseUser;
}(SpeakeasyBase));
export { PullRequestBaseUser };
var PullRequestBase = /** @class */ (function (_super) {
    __extends(PullRequestBase, _super);
    function PullRequestBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PullRequestBase.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], PullRequestBase.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repo" }),
        __metadata("design:type", PullRequestBaseRepo)
    ], PullRequestBase.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], PullRequestBase.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", PullRequestBaseUser)
    ], PullRequestBase.prototype, "user", void 0);
    return PullRequestBase;
}(SpeakeasyBase));
export { PullRequestBase };
var PullRequestHeadRepoLicense = /** @class */ (function (_super) {
    __extends(PullRequestHeadRepoLicense, _super);
    function PullRequestHeadRepoLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoLicense.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoLicense.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoLicense.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoLicense.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoLicense.prototype, "url", void 0);
    return PullRequestHeadRepoLicense;
}(SpeakeasyBase));
export { PullRequestHeadRepoLicense };
var PullRequestHeadRepoOwner = /** @class */ (function (_super) {
    __extends(PullRequestHeadRepoOwner, _super);
    function PullRequestHeadRepoOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepoOwner.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepoOwner.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepoOwner.prototype, "url", void 0);
    return PullRequestHeadRepoOwner;
}(SpeakeasyBase));
export { PullRequestHeadRepoOwner };
var PullRequestHeadRepoPermissions = /** @class */ (function (_super) {
    __extends(PullRequestHeadRepoPermissions, _super);
    function PullRequestHeadRepoPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepoPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepoPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepoPermissions.prototype, "push", void 0);
    return PullRequestHeadRepoPermissions;
}(SpeakeasyBase));
export { PullRequestHeadRepoPermissions };
var PullRequestHeadRepo = /** @class */ (function (_super) {
    __extends(PullRequestHeadRepo, _super);
    function PullRequestHeadRepo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PullRequestHeadRepo.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepo.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepo.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", PullRequestHeadRepoLicense)
    ], PullRequestHeadRepo.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_branch" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "masterBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepo.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepo.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", PullRequestHeadRepoOwner)
    ], PullRequestHeadRepo.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", PullRequestHeadRepoPermissions)
    ], PullRequestHeadRepo.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadRepo.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", Date)
    ], PullRequestHeadRepo.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepo.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepo.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], PullRequestHeadRepo.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PullRequestHeadRepo.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestHeadRepo.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepo.prototype, "watchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], PullRequestHeadRepo.prototype, "watchersCount", void 0);
    return PullRequestHeadRepo;
}(SpeakeasyBase));
export { PullRequestHeadRepo };
var PullRequestHeadUser = /** @class */ (function (_super) {
    __extends(PullRequestHeadUser, _super);
    function PullRequestHeadUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestHeadUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestHeadUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestHeadUser.prototype, "url", void 0);
    return PullRequestHeadUser;
}(SpeakeasyBase));
export { PullRequestHeadUser };
var PullRequestHead = /** @class */ (function (_super) {
    __extends(PullRequestHead, _super);
    function PullRequestHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PullRequestHead.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], PullRequestHead.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repo" }),
        __metadata("design:type", PullRequestHeadRepo)
    ], PullRequestHead.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], PullRequestHead.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", PullRequestHeadUser)
    ], PullRequestHead.prototype, "user", void 0);
    return PullRequestHead;
}(SpeakeasyBase));
export { PullRequestHead };
var PullRequestLabels = /** @class */ (function (_super) {
    __extends(PullRequestLabels, _super);
    function PullRequestLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], PullRequestLabels.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default" }),
        __metadata("design:type", Boolean)
    ], PullRequestLabels.prototype, "default", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PullRequestLabels.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestLabels.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PullRequestLabels.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestLabels.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestLabels.prototype, "url", void 0);
    return PullRequestLabels;
}(SpeakeasyBase));
export { PullRequestLabels };
var PullRequestMilestoneSimpleUser = /** @class */ (function (_super) {
    __extends(PullRequestMilestoneSimpleUser, _super);
    function PullRequestMilestoneSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestMilestoneSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PullRequestMilestoneSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestMilestoneSimpleUser.prototype, "url", void 0);
    return PullRequestMilestoneSimpleUser;
}(SpeakeasyBase));
export { PullRequestMilestoneSimpleUser };
export var PullRequestMilestoneStateEnum;
(function (PullRequestMilestoneStateEnum) {
    PullRequestMilestoneStateEnum["Open"] = "open";
    PullRequestMilestoneStateEnum["Closed"] = "closed";
})(PullRequestMilestoneStateEnum || (PullRequestMilestoneStateEnum = {}));
var PullRequestMilestone = /** @class */ (function (_super) {
    __extends(PullRequestMilestone, _super);
    function PullRequestMilestone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_at" }),
        __metadata("design:type", Date)
    ], PullRequestMilestone.prototype, "closedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_issues" }),
        __metadata("design:type", Number)
    ], PullRequestMilestone.prototype, "closedIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PullRequestMilestone.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", PullRequestMilestoneSimpleUser)
    ], PullRequestMilestone.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PullRequestMilestone.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], PullRequestMilestone.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestone.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestMilestone.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], PullRequestMilestone.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequestMilestone.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], PullRequestMilestone.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], PullRequestMilestone.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PullRequestMilestone.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PullRequestMilestone.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PullRequestMilestone.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestMilestone.prototype, "url", void 0);
    return PullRequestMilestone;
}(SpeakeasyBase));
export { PullRequestMilestone };
export var PullRequestStateEnum;
(function (PullRequestStateEnum) {
    PullRequestStateEnum["Open"] = "open";
    PullRequestStateEnum["Closed"] = "closed";
})(PullRequestStateEnum || (PullRequestStateEnum = {}));
// PullRequest
/**
 * Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
**/
var PullRequest = /** @class */ (function (_super) {
    __extends(PullRequest, _super);
    function PullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", PullRequestLinks)
    ], PullRequest.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_lock_reason" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "activeLockReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additions" }),
        __metadata("design:type", Number)
    ], PullRequest.prototype, "additions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee" }),
        __metadata("design:type", PullRequestSimpleUser)
    ], PullRequest.prototype, "assignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees", elemType: SimpleUser }),
        __metadata("design:type", Array)
    ], PullRequest.prototype, "assignees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_association" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "authorAssociation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_merge" }),
        __metadata("design:type", AutoMerge)
    ], PullRequest.prototype, "autoMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base" }),
        __metadata("design:type", PullRequestBase)
    ], PullRequest.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_files" }),
        __metadata("design:type", Number)
    ], PullRequest.prototype, "changedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_at" }),
        __metadata("design:type", Date)
    ], PullRequest.prototype, "closedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", Number)
    ], PullRequest.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits" }),
        __metadata("design:type", Number)
    ], PullRequest.prototype, "commits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PullRequest.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletions" }),
        __metadata("design:type", Number)
    ], PullRequest.prototype, "deletions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diff_url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "diffUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", Boolean)
    ], PullRequest.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head" }),
        __metadata("design:type", PullRequestHead)
    ], PullRequest.prototype, "head", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequest.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "issueUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: PullRequestLabels }),
        __metadata("design:type", Array)
    ], PullRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], PullRequest.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintainer_can_modify" }),
        __metadata("design:type", Boolean)
    ], PullRequest.prototype, "maintainerCanModify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merge_commit_sha" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "mergeCommitSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeable" }),
        __metadata("design:type", Boolean)
    ], PullRequest.prototype, "mergeable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeable_state" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "mergeableState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merged" }),
        __metadata("design:type", Boolean)
    ], PullRequest.prototype, "merged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merged_at" }),
        __metadata("design:type", Date)
    ], PullRequest.prototype, "mergedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merged_by" }),
        __metadata("design:type", PullRequestSimpleUser)
    ], PullRequest.prototype, "mergedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestone" }),
        __metadata("design:type", PullRequestMilestone)
    ], PullRequest.prototype, "milestone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], PullRequest.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patch_url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "patchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rebaseable" }),
        __metadata("design:type", Boolean)
    ], PullRequest.prototype, "rebaseable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requested_reviewers", elemType: SimpleUser }),
        __metadata("design:type", Array)
    ], PullRequest.prototype, "requestedReviewers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requested_teams", elemType: TeamSimple }),
        __metadata("design:type", Array)
    ], PullRequest.prototype, "requestedTeams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_comment_url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "reviewCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_comments" }),
        __metadata("design:type", Number)
    ], PullRequest.prototype, "reviewComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_comments_url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "reviewCommentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PullRequest.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", PullRequestSimpleUser)
    ], PullRequest.prototype, "user", void 0);
    return PullRequest;
}(SpeakeasyBase));
export { PullRequest };
