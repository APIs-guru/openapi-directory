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
var PackageSimpleUser = /** @class */ (function (_super) {
    __extends(PackageSimpleUser, _super);
    function PackageSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PackageSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PackageSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageSimpleUser.prototype, "url", void 0);
    return PackageSimpleUser;
}(SpeakeasyBase));
export { PackageSimpleUser };
export var PackagePackageTypeEnum;
(function (PackagePackageTypeEnum) {
    PackagePackageTypeEnum["Npm"] = "npm";
    PackagePackageTypeEnum["Maven"] = "maven";
    PackagePackageTypeEnum["Rubygems"] = "rubygems";
    PackagePackageTypeEnum["Docker"] = "docker";
    PackagePackageTypeEnum["Nuget"] = "nuget";
    PackagePackageTypeEnum["Container"] = "container";
})(PackagePackageTypeEnum || (PackagePackageTypeEnum = {}));
var PackageMinimalRepositoryLicense = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositoryLicense, _super);
    function PackageMinimalRepositoryLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryLicense.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryLicense.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryLicense.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryLicense.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryLicense.prototype, "url", void 0);
    return PackageMinimalRepositoryLicense;
}(SpeakeasyBase));
export { PackageMinimalRepositoryLicense };
var PackageMinimalRepositorySimpleUser = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositorySimpleUser, _super);
    function PackageMinimalRepositorySimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositorySimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositorySimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositorySimpleUser.prototype, "url", void 0);
    return PackageMinimalRepositorySimpleUser;
}(SpeakeasyBase));
export { PackageMinimalRepositorySimpleUser };
var PackageMinimalRepositoryPermissions = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositoryPermissions, _super);
    function PackageMinimalRepositoryPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryPermissions.prototype, "push", void 0);
    return PackageMinimalRepositoryPermissions;
}(SpeakeasyBase));
export { PackageMinimalRepositoryPermissions };
var PackageMinimalRepositoryRepositoryLicenseSimple = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositoryRepositoryLicenseSimple, _super);
    function PackageMinimalRepositoryRepositoryLicenseSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryLicenseSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryLicenseSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryLicenseSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryLicenseSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryLicenseSimple.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryLicenseSimple.prototype, "url", void 0);
    return PackageMinimalRepositoryRepositoryLicenseSimple;
}(SpeakeasyBase));
export { PackageMinimalRepositoryRepositoryLicenseSimple };
var PackageMinimalRepositoryRepositorySimpleUser = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositoryRepositorySimpleUser, _super);
    function PackageMinimalRepositoryRepositorySimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositorySimpleUser.prototype, "url", void 0);
    return PackageMinimalRepositoryRepositorySimpleUser;
}(SpeakeasyBase));
export { PackageMinimalRepositoryRepositorySimpleUser };
var PackageMinimalRepositoryRepositoryPermissions = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositoryRepositoryPermissions, _super);
    function PackageMinimalRepositoryRepositoryPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintain" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryPermissions.prototype, "maintain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryPermissions.prototype, "push", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triage" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryPermissions.prototype, "triage", void 0);
    return PackageMinimalRepositoryRepositoryPermissions;
}(SpeakeasyBase));
export { PackageMinimalRepositoryRepositoryPermissions };
var PackageMinimalRepositoryRepositoryTemplateRepositoryOwner = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositoryRepositoryTemplateRepositoryOwner, _super);
    function PackageMinimalRepositoryRepositoryTemplateRepositoryOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryOwner.prototype, "url", void 0);
    return PackageMinimalRepositoryRepositoryTemplateRepositoryOwner;
}(SpeakeasyBase));
export { PackageMinimalRepositoryRepositoryTemplateRepositoryOwner };
var PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions, _super);
    function PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions.prototype, "push", void 0);
    return PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions;
}(SpeakeasyBase));
export { PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions };
var PackageMinimalRepositoryRepositoryTemplateRepository = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositoryRepositoryTemplateRepository, _super);
    function PackageMinimalRepositoryRepositoryTemplateRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "networkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", PackageMinimalRepositoryRepositoryTemplateRepositoryOwner)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "subscribersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "visibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepositoryTemplateRepository.prototype, "watchersCount", void 0);
    return PackageMinimalRepositoryRepositoryTemplateRepository;
}(SpeakeasyBase));
export { PackageMinimalRepositoryRepositoryTemplateRepository };
var PackageMinimalRepositoryRepository = /** @class */ (function (_super) {
    __extends(PackageMinimalRepositoryRepository, _super);
    function PackageMinimalRepositoryRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "allowMergeCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "allowRebaseMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "allowSquashMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PackageMinimalRepositoryRepository.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", PackageMinimalRepositoryRepositoryLicenseSimple)
    ], PackageMinimalRepositoryRepository.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_branch" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "masterBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "networkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", PackageMinimalRepositoryRepositorySimpleUser)
    ], PackageMinimalRepositoryRepository.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", PackageMinimalRepositoryRepositoryPermissions)
    ], PackageMinimalRepositoryRepository.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepositoryRepository.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", Date)
    ], PackageMinimalRepositoryRepository.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "subscribersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_repository" }),
        __metadata("design:type", PackageMinimalRepositoryRepositoryTemplateRepository)
    ], PackageMinimalRepositoryRepository.prototype, "templateRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], PackageMinimalRepositoryRepository.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PackageMinimalRepositoryRepository.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], PackageMinimalRepositoryRepository.prototype, "visibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "watchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepositoryRepository.prototype, "watchersCount", void 0);
    return PackageMinimalRepositoryRepository;
}(SpeakeasyBase));
export { PackageMinimalRepositoryRepository };
var PackageMinimalRepository = /** @class */ (function (_super) {
    __extends(PackageMinimalRepository, _super);
    function PackageMinimalRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archive_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "archiveUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "assigneesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobs_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "blobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branches_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "branchesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clone_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "cloneUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "collaboratorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compare_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "compareUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "contributorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PackageMinimalRepository.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_branch" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "defaultBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "deploymentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloads_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "downloadsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "fork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "forksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_commits_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "gitCommitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_refs_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "gitRefsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_tags_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "gitTagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_downloads" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "hasDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_issues" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "hasIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_pages" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "hasPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_projects" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "hasProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_wiki" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "hasWiki", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "homepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "hooksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_comment_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "issueCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_events_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "issueEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "issuesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "keysUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "languagesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", PackageMinimalRepositoryLicense)
    ], PackageMinimalRepository.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "mergesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestones_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "milestonesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mirror_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "mirrorUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "networkCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "notificationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "openIssuesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", PackageMinimalRepositorySimpleUser)
    ], PackageMinimalRepository.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", PackageMinimalRepositoryPermissions)
    ], PackageMinimalRepository.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], PackageMinimalRepository.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulls_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "pullsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushed_at" }),
        __metadata("design:type", Date)
    ], PackageMinimalRepository.prototype, "pushedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releases_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "releasesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "sshUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "stargazersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stargazers_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "stargazersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statuses_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "statusesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "subscribersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribers_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "subscribersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "svnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "tagsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temp_clone_token" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "tempCloneToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_repository" }),
        __metadata("design:type", PackageMinimalRepositoryRepository)
    ], PackageMinimalRepository.prototype, "templateRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics" }),
        __metadata("design:type", Array)
    ], PackageMinimalRepository.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trees_url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "treesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PackageMinimalRepository.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], PackageMinimalRepository.prototype, "visibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "watchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchers_count" }),
        __metadata("design:type", Number)
    ], PackageMinimalRepository.prototype, "watchersCount", void 0);
    return PackageMinimalRepository;
}(SpeakeasyBase));
export { PackageMinimalRepository };
export var PackageVisibilityEnum;
(function (PackageVisibilityEnum) {
    PackageVisibilityEnum["Private"] = "private";
    PackageVisibilityEnum["Public"] = "public";
})(PackageVisibilityEnum || (PackageVisibilityEnum = {}));
// Package
/**
 * A software package
**/
var Package = /** @class */ (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Package.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Package.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Package.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Package.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", PackageSimpleUser)
    ], Package.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=package_type" }),
        __metadata("design:type", String)
    ], Package.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", PackageMinimalRepository)
    ], Package.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Package.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Package.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version_count" }),
        __metadata("design:type", Number)
    ], Package.prototype, "versionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], Package.prototype, "visibility", void 0);
    return Package;
}(SpeakeasyBase));
export { Package };
