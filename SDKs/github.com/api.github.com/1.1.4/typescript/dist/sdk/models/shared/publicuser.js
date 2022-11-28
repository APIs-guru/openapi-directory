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
var PublicUserPlan = /** @class */ (function (_super) {
    __extends(PublicUserPlan, _super);
    function PublicUserPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators" }),
        __metadata("design:type", Number)
    ], PublicUserPlan.prototype, "collaborators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PublicUserPlan.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_repos" }),
        __metadata("design:type", Number)
    ], PublicUserPlan.prototype, "privateRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", Number)
    ], PublicUserPlan.prototype, "space", void 0);
    return PublicUserPlan;
}(SpeakeasyBase));
export { PublicUserPlan };
// PublicUser
/**
 * Public User
**/
var PublicUser = /** @class */ (function (_super) {
    __extends(PublicUser, _super);
    function PublicUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blog" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "blog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "collaborators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PublicUser.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk_usage" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "diskUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "following", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hireable" }),
        __metadata("design:type", Boolean)
    ], PublicUser.prototype, "hireable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owned_private_repos" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "ownedPrivateRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plan" }),
        __metadata("design:type", PublicUserPlan)
    ], PublicUser.prototype, "plan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_gists" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "privateGists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_gists" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "publicGists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_repos" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "publicRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PublicUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended_at" }),
        __metadata("design:type", Date)
    ], PublicUser.prototype, "suspendedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_private_repos" }),
        __metadata("design:type", Number)
    ], PublicUser.prototype, "totalPrivateRepos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twitter_username" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "twitterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PublicUser.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PublicUser.prototype, "url", void 0);
    return PublicUser;
}(SpeakeasyBase));
export { PublicUser };
