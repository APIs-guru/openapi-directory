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
var BaseGistFiles = /** @class */ (function (_super) {
    __extends(BaseGistFiles, _super);
    function BaseGistFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], BaseGistFiles.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], BaseGistFiles.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw_url" }),
        __metadata("design:type", String)
    ], BaseGistFiles.prototype, "rawUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], BaseGistFiles.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BaseGistFiles.prototype, "type", void 0);
    return BaseGistFiles;
}(SpeakeasyBase));
export { BaseGistFiles };
var BaseGistSimpleUser = /** @class */ (function (_super) {
    __extends(BaseGistSimpleUser, _super);
    function BaseGistSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BaseGistSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], BaseGistSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BaseGistSimpleUser.prototype, "url", void 0);
    return BaseGistSimpleUser;
}(SpeakeasyBase));
export { BaseGistSimpleUser };
// BaseGist
/**
 * Base Gist
**/
var BaseGist = /** @class */ (function (_super) {
    __extends(BaseGist, _super);
    function BaseGist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", Number)
    ], BaseGist.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], BaseGist.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: BaseGistFiles }),
        __metadata("design:type", Map)
    ], BaseGist.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Array)
    ], BaseGist.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_pull_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "gitPullUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_push_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "gitPushUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=history" }),
        __metadata("design:type", Array)
    ], BaseGist.prototype, "history", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", BaseGistSimpleUser)
    ], BaseGist.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], BaseGist.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truncated" }),
        __metadata("design:type", Boolean)
    ], BaseGist.prototype, "truncated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], BaseGist.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BaseGist.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", BaseGistSimpleUser)
    ], BaseGist.prototype, "user", void 0);
    return BaseGist;
}(SpeakeasyBase));
export { BaseGist };
