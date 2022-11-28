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
var TeamRepositoryLicenseSimple = /** @class */ (function (_super) {
    __extends(TeamRepositoryLicenseSimple, _super);
    function TeamRepositoryLicenseSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryLicenseSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], TeamRepositoryLicenseSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamRepositoryLicenseSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryLicenseSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryLicenseSimple.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamRepositoryLicenseSimple.prototype, "url", void 0);
    return TeamRepositoryLicenseSimple;
}(SpeakeasyBase));
export { TeamRepositoryLicenseSimple };
var TeamRepositorySimpleUser = /** @class */ (function (_super) {
    __extends(TeamRepositorySimpleUser, _super);
    function TeamRepositorySimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamRepositorySimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], TeamRepositorySimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamRepositorySimpleUser.prototype, "url", void 0);
    return TeamRepositorySimpleUser;
}(SpeakeasyBase));
export { TeamRepositorySimpleUser };
var TeamRepositoryPermissions = /** @class */ (function (_super) {
    __extends(TeamRepositoryPermissions, _super);
    function TeamRepositoryPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintain" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryPermissions.prototype, "maintain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryPermissions.prototype, "push", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triage" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryPermissions.prototype, "triage", void 0);
    return TeamRepositoryPermissions;
}(SpeakeasyBase));
export { TeamRepositoryPermissions };
var TeamRepositoryRepositoryLicenseSimple = /** @class */ (function (_super) {
    __extends(TeamRepositoryRepositoryLicenseSimple, _super);
    function TeamRepositoryRepositoryLicenseSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryLicenseSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryLicenseSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryLicenseSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryLicenseSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryLicenseSimple.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryLicenseSimple.prototype, "url", void 0);
    return TeamRepositoryRepositoryLicenseSimple;
}(SpeakeasyBase));
export { TeamRepositoryRepositoryLicenseSimple };
var TeamRepositoryRepositorySimpleUser = /** @class */ (function (_super) {
    __extends(TeamRepositoryRepositorySimpleUser, _super);
    function TeamRepositoryRepositorySimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositorySimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositorySimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositorySimpleUser.prototype, "url", void 0);
    return TeamRepositoryRepositorySimpleUser;
}(SpeakeasyBase));
export { TeamRepositoryRepositorySimpleUser };
var TeamRepositoryRepositoryPermissions = /** @class */ (function (_super) {
    __extends(TeamRepositoryRepositoryPermissions, _super);
    function TeamRepositoryRepositoryPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintain" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryPermissions.prototype, "maintain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryPermissions.prototype, "push", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triage" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryPermissions.prototype, "triage", void 0);
    return TeamRepositoryRepositoryPermissions;
}(SpeakeasyBase));
export { TeamRepositoryRepositoryPermissions };
var TeamRepositoryRepositoryTemplateRepositoryOwner = /** @class */ (function (_super) {
    __extends(TeamRepositoryRepositoryTemplateRepositoryOwner, _super);
    function TeamRepositoryRepositoryTemplateRepositoryOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepositoryOwner.prototype, "url", void 0);
    return TeamRepositoryRepositoryTemplateRepositoryOwner;
}(SpeakeasyBase));
export { TeamRepositoryRepositoryTemplateRepositoryOwner };
var TeamRepositoryRepositoryTemplateRepositoryPermissions = /** @class */ (function (_super) {
    __extends(TeamRepositoryRepositoryTemplateRepositoryPermissions, _super);
    function TeamRepositoryRepositoryTemplateRepositoryPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepositoryPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepositoryPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepositoryPermissions.prototype, "push", void 0);
    return TeamRepositoryRepositoryTemplateRepositoryPermissions;
}(SpeakeasyBase));
export { TeamRepositoryRepositoryTemplateRepositoryPermissions };
var TeamRepositoryRepositoryTemplateRepository = /** @class */ (function (_super) {
    __extends(TeamRepositoryRepositoryTemplateRepository, _super);
    function TeamRepositoryRepositoryTemplateRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "networkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", TeamRepositoryRepositoryTemplateRepositoryOwner)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", TeamRepositoryRepositoryTemplateRepositoryPermissions)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "subscribersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "visibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepositoryTemplateRepository.prototype, "watchersCount", void 0);
    return TeamRepositoryRepositoryTemplateRepository;
}(SpeakeasyBase));
export { TeamRepositoryRepositoryTemplateRepository };
var TeamRepositoryRepository = /** @class */ (function (_super) {
    __extends(TeamRepositoryRepository, _super);
    function TeamRepositoryRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], TeamRepositoryRepository.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", TeamRepositoryRepositoryLicenseSimple)
    ], TeamRepositoryRepository.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_branch" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "masterBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "networkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", TeamRepositoryRepositorySimpleUser)
    ], TeamRepositoryRepository.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", TeamRepositoryRepositorySimpleUser)
    ], TeamRepositoryRepository.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", TeamRepositoryRepositoryPermissions)
    ], TeamRepositoryRepository.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], TeamRepositoryRepository.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", Date)
    ], TeamRepositoryRepository.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "subscribersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_repository" }),
        __metadata("design:type", TeamRepositoryRepositoryTemplateRepository)
    ], TeamRepositoryRepository.prototype, "templateRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], TeamRepositoryRepository.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], TeamRepositoryRepository.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], TeamRepositoryRepository.prototype, "visibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "watchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], TeamRepositoryRepository.prototype, "watchersCount", void 0);
    return TeamRepositoryRepository;
}(SpeakeasyBase));
export { TeamRepositoryRepository };
// TeamRepository
/**
 * A team's access to a repository.
**/
var TeamRepository = /** @class */ (function (_super) {
    __extends(TeamRepository, _super);
    function TeamRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], TeamRepository.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", TeamRepositoryLicenseSimple)
    ], TeamRepository.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_branch" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "masterBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_count" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "networkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", TeamRepositorySimpleUser)
    ], TeamRepository.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", TeamRepositoryPermissions)
    ], TeamRepository.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], TeamRepository.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", Date)
    ], TeamRepository.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_count" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "subscribersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_repository" }),
        __metadata("design:type", TeamRepositoryRepository)
    ], TeamRepository.prototype, "templateRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], TeamRepository.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], TeamRepository.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], TeamRepository.prototype, "visibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "watchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], TeamRepository.prototype, "watchersCount", void 0);
    return TeamRepository;
}(SpeakeasyBase));
export { TeamRepository };
