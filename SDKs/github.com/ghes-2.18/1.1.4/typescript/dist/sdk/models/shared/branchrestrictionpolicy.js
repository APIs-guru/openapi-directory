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
var BranchRestrictionPolicyAppsOwner = /** @class */ (function (_super) {
    __extends(BranchRestrictionPolicyAppsOwner, _super);
    function BranchRestrictionPolicyAppsOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BranchRestrictionPolicyAppsOwner.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "membersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_members_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "publicMembersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsOwner.prototype, "url", void 0);
    return BranchRestrictionPolicyAppsOwner;
}(SpeakeasyBase));
export { BranchRestrictionPolicyAppsOwner };
var BranchRestrictionPolicyAppsPermissions = /** @class */ (function (_super) {
    __extends(BranchRestrictionPolicyAppsPermissions, _super);
    function BranchRestrictionPolicyAppsPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsPermissions.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsPermissions.prototype, "issues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsPermissions.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=single_file" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyAppsPermissions.prototype, "singleFile", void 0);
    return BranchRestrictionPolicyAppsPermissions;
}(SpeakeasyBase));
export { BranchRestrictionPolicyAppsPermissions };
var BranchRestrictionPolicyApps = /** @class */ (function (_super) {
    __extends(BranchRestrictionPolicyApps, _super);
    function BranchRestrictionPolicyApps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyApps.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyApps.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], BranchRestrictionPolicyApps.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyApps.prototype, "externalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyApps.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BranchRestrictionPolicyApps.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyApps.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyApps.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", BranchRestrictionPolicyAppsOwner)
    ], BranchRestrictionPolicyApps.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", BranchRestrictionPolicyAppsPermissions)
    ], BranchRestrictionPolicyApps.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyApps.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyApps.prototype, "updatedAt", void 0);
    return BranchRestrictionPolicyApps;
}(SpeakeasyBase));
export { BranchRestrictionPolicyApps };
var BranchRestrictionPolicyRestrictionsTeams = /** @class */ (function (_super) {
    __extends(BranchRestrictionPolicyRestrictionsTeams, _super);
    function BranchRestrictionPolicyRestrictionsTeams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "membersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", Object)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "repositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsTeams.prototype, "url", void 0);
    return BranchRestrictionPolicyRestrictionsTeams;
}(SpeakeasyBase));
export { BranchRestrictionPolicyRestrictionsTeams };
var BranchRestrictionPolicyRestrictionsUsers = /** @class */ (function (_super) {
    __extends(BranchRestrictionPolicyRestrictionsUsers, _super);
    function BranchRestrictionPolicyRestrictionsUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictionsUsers.prototype, "url", void 0);
    return BranchRestrictionPolicyRestrictionsUsers;
}(SpeakeasyBase));
export { BranchRestrictionPolicyRestrictionsUsers };
var BranchRestrictionPolicyRestrictions = /** @class */ (function (_super) {
    __extends(BranchRestrictionPolicyRestrictions, _super);
    function BranchRestrictionPolicyRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams", elemType: BranchRestrictionPolicyRestrictionsTeams }),
        __metadata("design:type", Array)
    ], BranchRestrictionPolicyRestrictions.prototype, "teams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictions.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictions.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: BranchRestrictionPolicyRestrictionsUsers }),
        __metadata("design:type", Array)
    ], BranchRestrictionPolicyRestrictions.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyRestrictions.prototype, "usersUrl", void 0);
    return BranchRestrictionPolicyRestrictions;
}(SpeakeasyBase));
export { BranchRestrictionPolicyRestrictions };
var BranchRestrictionPolicyTeams = /** @class */ (function (_super) {
    __extends(BranchRestrictionPolicyTeams, _super);
    function BranchRestrictionPolicyTeams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BranchRestrictionPolicyTeams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "membersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "repositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyTeams.prototype, "url", void 0);
    return BranchRestrictionPolicyTeams;
}(SpeakeasyBase));
export { BranchRestrictionPolicyTeams };
var BranchRestrictionPolicyUsers = /** @class */ (function (_super) {
    __extends(BranchRestrictionPolicyUsers, _super);
    function BranchRestrictionPolicyUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BranchRestrictionPolicyUsers.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], BranchRestrictionPolicyUsers.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicyUsers.prototype, "url", void 0);
    return BranchRestrictionPolicyUsers;
}(SpeakeasyBase));
export { BranchRestrictionPolicyUsers };
// BranchRestrictionPolicy
/**
 * Branch Restriction Policy
**/
var BranchRestrictionPolicy = /** @class */ (function (_super) {
    __extends(BranchRestrictionPolicy, _super);
    function BranchRestrictionPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apps", elemType: BranchRestrictionPolicyApps }),
        __metadata("design:type", Array)
    ], BranchRestrictionPolicy.prototype, "apps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apps_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicy.prototype, "appsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions", elemType: BranchRestrictionPolicyRestrictions }),
        __metadata("design:type", Array)
    ], BranchRestrictionPolicy.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams", elemType: BranchRestrictionPolicyTeams }),
        __metadata("design:type", Array)
    ], BranchRestrictionPolicy.prototype, "teams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicy.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicy.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: BranchRestrictionPolicyUsers }),
        __metadata("design:type", Array)
    ], BranchRestrictionPolicy.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users_url" }),
        __metadata("design:type", String)
    ], BranchRestrictionPolicy.prototype, "usersUrl", void 0);
    return BranchRestrictionPolicy;
}(SpeakeasyBase));
export { BranchRestrictionPolicy };
