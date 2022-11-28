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
var AuthorizationWithUserApp = /** @class */ (function (_super) {
    __extends(AuthorizationWithUserApp, _super);
    function AuthorizationWithUserApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserApp.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserApp.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserApp.prototype, "url", void 0);
    return AuthorizationWithUserApp;
}(SpeakeasyBase));
export { AuthorizationWithUserApp };
var AuthorizationWithUserUser = /** @class */ (function (_super) {
    __extends(AuthorizationWithUserUser, _super);
    function AuthorizationWithUserUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AuthorizationWithUserUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], AuthorizationWithUserUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUserUser.prototype, "url", void 0);
    return AuthorizationWithUserUser;
}(SpeakeasyBase));
export { AuthorizationWithUserUser };
var AuthorizationWithUser = /** @class */ (function (_super) {
    __extends(AuthorizationWithUser, _super);
    function AuthorizationWithUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app" }),
        __metadata("design:type", AuthorizationWithUserApp)
    ], AuthorizationWithUser.prototype, "app", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], AuthorizationWithUser.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], AuthorizationWithUser.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashed_token" }),
        __metadata("design:type", String)
    ], AuthorizationWithUser.prototype, "hashedToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AuthorizationWithUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], AuthorizationWithUser.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note_url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUser.prototype, "noteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], AuthorizationWithUser.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], AuthorizationWithUser.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token_last_eight" }),
        __metadata("design:type", String)
    ], AuthorizationWithUser.prototype, "tokenLastEight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], AuthorizationWithUser.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AuthorizationWithUser.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", AuthorizationWithUserUser)
    ], AuthorizationWithUser.prototype, "user", void 0);
    return AuthorizationWithUser;
}(SpeakeasyBase));
export { AuthorizationWithUser };
