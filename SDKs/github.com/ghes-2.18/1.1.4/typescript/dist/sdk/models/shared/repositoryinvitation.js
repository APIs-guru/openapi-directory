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
import { MinimalRepository } from "./minimalrepository";
var RepositoryInvitationSimpleUser = /** @class */ (function (_super) {
    __extends(RepositoryInvitationSimpleUser, _super);
    function RepositoryInvitationSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], RepositoryInvitationSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], RepositoryInvitationSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], RepositoryInvitationSimpleUser.prototype, "url", void 0);
    return RepositoryInvitationSimpleUser;
}(SpeakeasyBase));
export { RepositoryInvitationSimpleUser };
export var RepositoryInvitationPermissionsEnum;
(function (RepositoryInvitationPermissionsEnum) {
    RepositoryInvitationPermissionsEnum["Read"] = "read";
    RepositoryInvitationPermissionsEnum["Write"] = "write";
    RepositoryInvitationPermissionsEnum["Admin"] = "admin";
    RepositoryInvitationPermissionsEnum["Triage"] = "triage";
    RepositoryInvitationPermissionsEnum["Maintain"] = "maintain";
})(RepositoryInvitationPermissionsEnum || (RepositoryInvitationPermissionsEnum = {}));
// RepositoryInvitation
/**
 * Repository invitations let you manage who you collaborate with.
**/
var RepositoryInvitation = /** @class */ (function (_super) {
    __extends(RepositoryInvitation, _super);
    function RepositoryInvitation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], RepositoryInvitation.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], RepositoryInvitation.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], RepositoryInvitation.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], RepositoryInvitation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invitee" }),
        __metadata("design:type", RepositoryInvitationSimpleUser)
    ], RepositoryInvitation.prototype, "invitee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inviter" }),
        __metadata("design:type", RepositoryInvitationSimpleUser)
    ], RepositoryInvitation.prototype, "inviter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], RepositoryInvitation.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", String)
    ], RepositoryInvitation.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", MinimalRepository)
    ], RepositoryInvitation.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], RepositoryInvitation.prototype, "url", void 0);
    return RepositoryInvitation;
}(SpeakeasyBase));
export { RepositoryInvitation };
