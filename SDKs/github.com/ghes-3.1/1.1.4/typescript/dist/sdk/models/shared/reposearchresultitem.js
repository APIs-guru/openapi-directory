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
import { SearchResultTextMatches } from "./searchresulttextmatches";
var RepoSearchResultItemLicenseSimple = /** @class */ (function (_super) {
    __extends(RepoSearchResultItemLicenseSimple, _super);
    function RepoSearchResultItemLicenseSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemLicenseSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemLicenseSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemLicenseSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemLicenseSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemLicenseSimple.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemLicenseSimple.prototype, "url", void 0);
    return RepoSearchResultItemLicenseSimple;
}(SpeakeasyBase));
export { RepoSearchResultItemLicenseSimple };
var RepoSearchResultItemSimpleUser = /** @class */ (function (_super) {
    __extends(RepoSearchResultItemSimpleUser, _super);
    function RepoSearchResultItemSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItemSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItemSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItemSimpleUser.prototype, "url", void 0);
    return RepoSearchResultItemSimpleUser;
}(SpeakeasyBase));
export { RepoSearchResultItemSimpleUser };
var RepoSearchResultItemPermissions = /** @class */ (function (_super) {
    __extends(RepoSearchResultItemPermissions, _super);
    function RepoSearchResultItemPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItemPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItemPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItemPermissions.prototype, "push", void 0);
    return RepoSearchResultItemPermissions;
}(SpeakeasyBase));
export { RepoSearchResultItemPermissions };
// RepoSearchResultItem
/**
 * Repo Search Result Item
**/
var RepoSearchResultItem = /** @class */ (function (_super) {
    __extends(RepoSearchResultItem, _super);
    function RepoSearchResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], RepoSearchResultItem.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", RepoSearchResultItemLicenseSimple)
    ], RepoSearchResultItem.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_branch" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "masterBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", RepoSearchResultItemSimpleUser)
    ], RepoSearchResultItem.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", RepoSearchResultItemPermissions)
    ], RepoSearchResultItem.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], RepoSearchResultItem.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", Date)
    ], RepoSearchResultItem.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text_matches", elemType: SearchResultTextMatches }),
        __metadata("design:type", Array)
    ], RepoSearchResultItem.prototype, "textMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], RepoSearchResultItem.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], RepoSearchResultItem.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], RepoSearchResultItem.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "watchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], RepoSearchResultItem.prototype, "watchersCount", void 0);
    return RepoSearchResultItem;
}(SpeakeasyBase));
export { RepoSearchResultItem };
