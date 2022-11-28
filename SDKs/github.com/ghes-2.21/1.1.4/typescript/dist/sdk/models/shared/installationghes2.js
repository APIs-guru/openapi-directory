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
var InstallationGhes2Permissions = /** @class */ (function (_super) {
    __extends(InstallationGhes2Permissions, _super);
    function InstallationGhes2Permissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checks" }),
        __metadata("design:type", String)
    ], InstallationGhes2Permissions.prototype, "checks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], InstallationGhes2Permissions.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments" }),
        __metadata("design:type", String)
    ], InstallationGhes2Permissions.prototype, "deployments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues" }),
        __metadata("design:type", String)
    ], InstallationGhes2Permissions.prototype, "issues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", String)
    ], InstallationGhes2Permissions.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_administration" }),
        __metadata("design:type", String)
    ], InstallationGhes2Permissions.prototype, "organizationAdministration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_requests" }),
        __metadata("design:type", String)
    ], InstallationGhes2Permissions.prototype, "pullRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses" }),
        __metadata("design:type", String)
    ], InstallationGhes2Permissions.prototype, "statuses", void 0);
    return InstallationGhes2Permissions;
}(SpeakeasyBase));
export { InstallationGhes2Permissions };
export var InstallationGhes2RepositorySelectionEnum;
(function (InstallationGhes2RepositorySelectionEnum) {
    InstallationGhes2RepositorySelectionEnum["All"] = "all";
    InstallationGhes2RepositorySelectionEnum["Selected"] = "selected";
})(InstallationGhes2RepositorySelectionEnum || (InstallationGhes2RepositorySelectionEnum = {}));
var InstallationGhes2SimpleUser = /** @class */ (function (_super) {
    __extends(InstallationGhes2SimpleUser, _super);
    function InstallationGhes2SimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], InstallationGhes2SimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], InstallationGhes2SimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], InstallationGhes2SimpleUser.prototype, "url", void 0);
    return InstallationGhes2SimpleUser;
}(SpeakeasyBase));
export { InstallationGhes2SimpleUser };
// InstallationGhes2
/**
 * Installation
**/
var InstallationGhes2 = /** @class */ (function (_super) {
    __extends(InstallationGhes2, _super);
    function InstallationGhes2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_tokens_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2.prototype, "accessTokensUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", Object)
    ], InstallationGhes2.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app_id" }),
        __metadata("design:type", Number)
    ], InstallationGhes2.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app_slug" }),
        __metadata("design:type", String)
    ], InstallationGhes2.prototype, "appSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], InstallationGhes2.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], InstallationGhes2.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], InstallationGhes2.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], InstallationGhes2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", InstallationGhes2Permissions)
    ], InstallationGhes2.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories_url" }),
        __metadata("design:type", String)
    ], InstallationGhes2.prototype, "repositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_selection" }),
        __metadata("design:type", String)
    ], InstallationGhes2.prototype, "repositorySelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=single_file_name" }),
        __metadata("design:type", String)
    ], InstallationGhes2.prototype, "singleFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended_at" }),
        __metadata("design:type", Date)
    ], InstallationGhes2.prototype, "suspendedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended_by" }),
        __metadata("design:type", InstallationGhes2SimpleUser)
    ], InstallationGhes2.prototype, "suspendedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_id" }),
        __metadata("design:type", Number)
    ], InstallationGhes2.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_type" }),
        __metadata("design:type", String)
    ], InstallationGhes2.prototype, "targetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], InstallationGhes2.prototype, "updatedAt", void 0);
    return InstallationGhes2;
}(SpeakeasyBase));
export { InstallationGhes2 };
