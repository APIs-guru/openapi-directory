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
import { CodeOfConductSimple } from "./codeofconductsimple";
import { Repository } from "./repository";
var FullRepositoryLicenseSimple = /** @class */ (function (_super) {
    __extends(FullRepositoryLicenseSimple, _super);
    function FullRepositoryLicenseSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FullRepositoryLicenseSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], FullRepositoryLicenseSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FullRepositoryLicenseSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], FullRepositoryLicenseSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], FullRepositoryLicenseSimple.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FullRepositoryLicenseSimple.prototype, "url", void 0);
    return FullRepositoryLicenseSimple;
}(SpeakeasyBase));
export { FullRepositoryLicenseSimple };
var FullRepositorySimpleUser = /** @class */ (function (_super) {
    __extends(FullRepositorySimpleUser, _super);
    function FullRepositorySimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FullRepositorySimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], FullRepositorySimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FullRepositorySimpleUser.prototype, "url", void 0);
    return FullRepositorySimpleUser;
}(SpeakeasyBase));
export { FullRepositorySimpleUser };
var FullRepositoryPermissions = /** @class */ (function (_super) {
    __extends(FullRepositoryPermissions, _super);
    function FullRepositoryPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryPermissions.prototype, "push", void 0);
    return FullRepositoryPermissions;
}(SpeakeasyBase));
export { FullRepositoryPermissions };
var FullRepositoryRepositoryLicenseSimple = /** @class */ (function (_super) {
    __extends(FullRepositoryRepositoryLicenseSimple, _super);
    function FullRepositoryRepositoryLicenseSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryLicenseSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryLicenseSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryLicenseSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryLicenseSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryLicenseSimple.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryLicenseSimple.prototype, "url", void 0);
    return FullRepositoryRepositoryLicenseSimple;
}(SpeakeasyBase));
export { FullRepositoryRepositoryLicenseSimple };
var FullRepositoryRepositorySimpleUser = /** @class */ (function (_super) {
    __extends(FullRepositoryRepositorySimpleUser, _super);
    function FullRepositoryRepositorySimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositorySimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositorySimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositorySimpleUser.prototype, "url", void 0);
    return FullRepositoryRepositorySimpleUser;
}(SpeakeasyBase));
export { FullRepositoryRepositorySimpleUser };
var FullRepositoryRepositoryPermissions = /** @class */ (function (_super) {
    __extends(FullRepositoryRepositoryPermissions, _super);
    function FullRepositoryRepositoryPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintain" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryPermissions.prototype, "maintain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryPermissions.prototype, "push", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triage" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryPermissions.prototype, "triage", void 0);
    return FullRepositoryRepositoryPermissions;
}(SpeakeasyBase));
export { FullRepositoryRepositoryPermissions };
var FullRepositoryRepositoryTemplateRepositoryOwner = /** @class */ (function (_super) {
    __extends(FullRepositoryRepositoryTemplateRepositoryOwner, _super);
    function FullRepositoryRepositoryTemplateRepositoryOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepositoryOwner.prototype, "url", void 0);
    return FullRepositoryRepositoryTemplateRepositoryOwner;
}(SpeakeasyBase));
export { FullRepositoryRepositoryTemplateRepositoryOwner };
var FullRepositoryRepositoryTemplateRepositoryPermissions = /** @class */ (function (_super) {
    __extends(FullRepositoryRepositoryTemplateRepositoryPermissions, _super);
    function FullRepositoryRepositoryTemplateRepositoryPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepositoryPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepositoryPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepositoryPermissions.prototype, "push", void 0);
    return FullRepositoryRepositoryTemplateRepositoryPermissions;
}(SpeakeasyBase));
export { FullRepositoryRepositoryTemplateRepositoryPermissions };
var FullRepositoryRepositoryTemplateRepository = /** @class */ (function (_super) {
    __extends(FullRepositoryRepositoryTemplateRepository, _super);
    function FullRepositoryRepositoryTemplateRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "networkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", FullRepositoryRepositoryTemplateRepositoryOwner)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", FullRepositoryRepositoryTemplateRepositoryPermissions)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "subscribersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "visibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepositoryTemplateRepository.prototype, "watchersCount", void 0);
    return FullRepositoryRepositoryTemplateRepository;
}(SpeakeasyBase));
export { FullRepositoryRepositoryTemplateRepository };
var FullRepositoryRepository = /** @class */ (function (_super) {
    __extends(FullRepositoryRepository, _super);
    function FullRepositoryRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], FullRepositoryRepository.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", FullRepositoryRepositoryLicenseSimple)
    ], FullRepositoryRepository.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_branch" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "masterBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "networkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", FullRepositoryRepositorySimpleUser)
    ], FullRepositoryRepository.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", FullRepositoryRepositoryPermissions)
    ], FullRepositoryRepository.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], FullRepositoryRepository.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", Date)
    ], FullRepositoryRepository.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "subscribersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_repository" }),
        __metadata("design:type", FullRepositoryRepositoryTemplateRepository)
    ], FullRepositoryRepository.prototype, "templateRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], FullRepositoryRepository.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], FullRepositoryRepository.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], FullRepositoryRepository.prototype, "visibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "watchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], FullRepositoryRepository.prototype, "watchersCount", void 0);
    return FullRepositoryRepository;
}(SpeakeasyBase));
export { FullRepositoryRepository };
// FullRepository
/**
 * Full Repository
**/
var FullRepository = /** @class */ (function (_super) {
    __extends(FullRepository, _super);
    function FullRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=anonymous_access_enabled" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "anonymousAccessEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code_of_conduct" }),
        __metadata("design:type", CodeOfConductSimple)
    ], FullRepository.prototype, "codeOfConduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], FullRepository.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", FullRepositoryLicenseSimple)
    ], FullRepository.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_branch" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "masterBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_count" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "networkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", FullRepositorySimpleUser)
    ], FullRepository.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", FullRepositorySimpleUser)
    ], FullRepository.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", Repository)
    ], FullRepository.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", FullRepositoryPermissions)
    ], FullRepository.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], FullRepository.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", Date)
    ], FullRepository.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Repository)
    ], FullRepository.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_count" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "subscribersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_repository" }),
        __metadata("design:type", FullRepositoryRepository)
    ], FullRepository.prototype, "templateRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], FullRepository.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], FullRepository.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], FullRepository.prototype, "visibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "watchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], FullRepository.prototype, "watchersCount", void 0);
    return FullRepository;
}(SpeakeasyBase));
export { FullRepository };
