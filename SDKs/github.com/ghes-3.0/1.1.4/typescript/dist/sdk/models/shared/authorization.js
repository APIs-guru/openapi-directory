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
import { AppPermissions } from "./apppermissions";
var AuthorizationApp = /** @class */ (function (_super) {
    __extends(AuthorizationApp, _super);
    function AuthorizationApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], AuthorizationApp.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AuthorizationApp.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AuthorizationApp.prototype, "url", void 0);
    return AuthorizationApp;
}(SpeakeasyBase));
export { AuthorizationApp };
export var AuthorizationScopedInstallationRepositorySelectionEnum;
(function (AuthorizationScopedInstallationRepositorySelectionEnum) {
    AuthorizationScopedInstallationRepositorySelectionEnum["All"] = "all";
    AuthorizationScopedInstallationRepositorySelectionEnum["Selected"] = "selected";
})(AuthorizationScopedInstallationRepositorySelectionEnum || (AuthorizationScopedInstallationRepositorySelectionEnum = {}));
var AuthorizationScopedInstallation = /** @class */ (function (_super) {
    __extends(AuthorizationScopedInstallation, _super);
    function AuthorizationScopedInstallation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", SimpleUser)
    ], AuthorizationScopedInstallation.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_multiple_single_files" }),
        __metadata("design:type", Boolean)
    ], AuthorizationScopedInstallation.prototype, "hasMultipleSingleFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", AppPermissions)
    ], AuthorizationScopedInstallation.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories_url" }),
        __metadata("design:type", String)
    ], AuthorizationScopedInstallation.prototype, "repositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_selection" }),
        __metadata("design:type", String)
    ], AuthorizationScopedInstallation.prototype, "repositorySelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=single_file_name" }),
        __metadata("design:type", String)
    ], AuthorizationScopedInstallation.prototype, "singleFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=single_file_paths" }),
        __metadata("design:type", Array)
    ], AuthorizationScopedInstallation.prototype, "singleFilePaths", void 0);
    return AuthorizationScopedInstallation;
}(SpeakeasyBase));
export { AuthorizationScopedInstallation };
var AuthorizationSimpleUser = /** @class */ (function (_super) {
    __extends(AuthorizationSimpleUser, _super);
    function AuthorizationSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AuthorizationSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], AuthorizationSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AuthorizationSimpleUser.prototype, "url", void 0);
    return AuthorizationSimpleUser;
}(SpeakeasyBase));
export { AuthorizationSimpleUser };
// Authorization
/**
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
**/
var Authorization = /** @class */ (function (_super) {
    __extends(Authorization, _super);
    function Authorization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app" }),
        __metadata("design:type", AuthorizationApp)
    ], Authorization.prototype, "app", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Authorization.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], Authorization.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashed_token" }),
        __metadata("design:type", String)
    ], Authorization.prototype, "hashedToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Authorization.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installation" }),
        __metadata("design:type", AuthorizationScopedInstallation)
    ], Authorization.prototype, "installation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], Authorization.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note_url" }),
        __metadata("design:type", String)
    ], Authorization.prototype, "noteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], Authorization.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], Authorization.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token_last_eight" }),
        __metadata("design:type", String)
    ], Authorization.prototype, "tokenLastEight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Authorization.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Authorization.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", AuthorizationSimpleUser)
    ], Authorization.prototype, "user", void 0);
    return Authorization;
}(SpeakeasyBase));
export { Authorization };
