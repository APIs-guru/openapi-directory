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
var InstallationPermissions = /** @class */ (function (_super) {
    __extends(InstallationPermissions, _super);
    function InstallationPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checks" }),
        __metadata("design:type", String)
    ], InstallationPermissions.prototype, "checks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], InstallationPermissions.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments" }),
        __metadata("design:type", String)
    ], InstallationPermissions.prototype, "deployments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues" }),
        __metadata("design:type", String)
    ], InstallationPermissions.prototype, "issues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", String)
    ], InstallationPermissions.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_administration" }),
        __metadata("design:type", String)
    ], InstallationPermissions.prototype, "organizationAdministration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_requests" }),
        __metadata("design:type", String)
    ], InstallationPermissions.prototype, "pullRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses" }),
        __metadata("design:type", String)
    ], InstallationPermissions.prototype, "statuses", void 0);
    return InstallationPermissions;
}(SpeakeasyBase));
export { InstallationPermissions };
export var InstallationRepositorySelectionEnum;
(function (InstallationRepositorySelectionEnum) {
    InstallationRepositorySelectionEnum["All"] = "all";
    InstallationRepositorySelectionEnum["Selected"] = "selected";
})(InstallationRepositorySelectionEnum || (InstallationRepositorySelectionEnum = {}));
var InstallationSimpleUser = /** @class */ (function (_super) {
    __extends(InstallationSimpleUser, _super);
    function InstallationSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], InstallationSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], InstallationSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], InstallationSimpleUser.prototype, "url", void 0);
    return InstallationSimpleUser;
}(SpeakeasyBase));
export { InstallationSimpleUser };
// Installation
/**
 * Installation
**/
var Installation = /** @class */ (function (_super) {
    __extends(Installation, _super);
    function Installation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_tokens_url" }),
        __metadata("design:type", String)
    ], Installation.prototype, "accessTokensUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", Object)
    ], Installation.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app_id" }),
        __metadata("design:type", Number)
    ], Installation.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app_slug" }),
        __metadata("design:type", String)
    ], Installation.prototype, "appSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], Installation.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Installation.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], Installation.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_multiple_single_files" }),
        __metadata("design:type", Boolean)
    ], Installation.prototype, "hasMultipleSingleFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Installation.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Installation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", InstallationPermissions)
    ], Installation.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories_url" }),
        __metadata("design:type", String)
    ], Installation.prototype, "repositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_selection" }),
        __metadata("design:type", String)
    ], Installation.prototype, "repositorySelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=single_file_name" }),
        __metadata("design:type", String)
    ], Installation.prototype, "singleFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=single_file_paths" }),
        __metadata("design:type", Array)
    ], Installation.prototype, "singleFilePaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended_at" }),
        __metadata("design:type", Date)
    ], Installation.prototype, "suspendedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended_by" }),
        __metadata("design:type", InstallationSimpleUser)
    ], Installation.prototype, "suspendedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_id" }),
        __metadata("design:type", Number)
    ], Installation.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_type" }),
        __metadata("design:type", String)
    ], Installation.prototype, "targetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Installation.prototype, "updatedAt", void 0);
    return Installation;
}(SpeakeasyBase));
export { Installation };
