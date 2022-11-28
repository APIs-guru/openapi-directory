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
var GistSimpleFiles = /** @class */ (function (_super) {
    __extends(GistSimpleFiles, _super);
    function GistSimpleFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GistSimpleFiles.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], GistSimpleFiles.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], GistSimpleFiles.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw_url" }),
        __metadata("design:type", String)
    ], GistSimpleFiles.prototype, "rawUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GistSimpleFiles.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truncated" }),
        __metadata("design:type", Boolean)
    ], GistSimpleFiles.prototype, "truncated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GistSimpleFiles.prototype, "type", void 0);
    return GistSimpleFiles;
}(SpeakeasyBase));
export { GistSimpleFiles };
var GistSimpleGistFiles = /** @class */ (function (_super) {
    __extends(GistSimpleGistFiles, _super);
    function GistSimpleGistFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], GistSimpleGistFiles.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], GistSimpleGistFiles.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistFiles.prototype, "rawUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GistSimpleGistFiles.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GistSimpleGistFiles.prototype, "type", void 0);
    return GistSimpleGistFiles;
}(SpeakeasyBase));
export { GistSimpleGistFiles };
var GistSimpleGistSimpleUser = /** @class */ (function (_super) {
    __extends(GistSimpleGistSimpleUser, _super);
    function GistSimpleGistSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GistSimpleGistSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], GistSimpleGistSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GistSimpleGistSimpleUser.prototype, "url", void 0);
    return GistSimpleGistSimpleUser;
}(SpeakeasyBase));
export { GistSimpleGistSimpleUser };
// GistSimpleGist
/**
 * Gist
**/
var GistSimpleGist = /** @class */ (function (_super) {
    __extends(GistSimpleGist, _super);
    function GistSimpleGist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", Number)
    ], GistSimpleGist.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], GistSimpleGist.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: GistSimpleGistFiles }),
        __metadata("design:type", Map)
    ], GistSimpleGist.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Array)
    ], GistSimpleGist.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_pull_url" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "gitPullUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_push_url" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "gitPushUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=history" }),
        __metadata("design:type", Array)
    ], GistSimpleGist.prototype, "history", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", GistSimpleGistSimpleUser)
    ], GistSimpleGist.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], GistSimpleGist.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truncated" }),
        __metadata("design:type", Boolean)
    ], GistSimpleGist.prototype, "truncated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], GistSimpleGist.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GistSimpleGist.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", GistSimpleGistSimpleUser)
    ], GistSimpleGist.prototype, "user", void 0);
    return GistSimpleGist;
}(SpeakeasyBase));
export { GistSimpleGist };
// GistSimple
/**
 * Gist Simple
**/
var GistSimple = /** @class */ (function (_super) {
    __extends(GistSimple, _super);
    function GistSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", Number)
    ], GistSimple.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commits_url" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "commitsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: GistSimpleFiles }),
        __metadata("design:type", Map)
    ], GistSimple.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fork_of" }),
        __metadata("design:type", GistSimpleGist)
    ], GistSimple.prototype, "forkOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks" }),
        __metadata("design:type", Array)
    ], GistSimple.prototype, "forks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forks_url" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "forksUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_pull_url" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "gitPullUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_push_url" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "gitPushUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=history" }),
        __metadata("design:type", Array)
    ], GistSimple.prototype, "history", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", SimpleUser)
    ], GistSimple.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], GistSimple.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truncated" }),
        __metadata("design:type", Boolean)
    ], GistSimple.prototype, "truncated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], GistSimple.prototype, "user", void 0);
    return GistSimple;
}(SpeakeasyBase));
export { GistSimple };
