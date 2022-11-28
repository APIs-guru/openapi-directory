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
import { Verification } from "./verification";
var CommitSimpleUser = /** @class */ (function (_super) {
    __extends(CommitSimpleUser, _super);
    function CommitSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CommitSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], CommitSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommitSimpleUser.prototype, "url", void 0);
    return CommitSimpleUser;
}(SpeakeasyBase));
export { CommitSimpleUser };
var CommitCommitGitUser = /** @class */ (function (_super) {
    __extends(CommitCommitGitUser, _super);
    function CommitCommitGitUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], CommitCommitGitUser.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CommitCommitGitUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommitCommitGitUser.prototype, "name", void 0);
    return CommitCommitGitUser;
}(SpeakeasyBase));
export { CommitCommitGitUser };
var CommitCommitTree = /** @class */ (function (_super) {
    __extends(CommitCommitTree, _super);
    function CommitCommitTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], CommitCommitTree.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommitCommitTree.prototype, "url", void 0);
    return CommitCommitTree;
}(SpeakeasyBase));
export { CommitCommitTree };
var CommitCommit = /** @class */ (function (_super) {
    __extends(CommitCommit, _super);
    function CommitCommit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", CommitCommitGitUser)
    ], CommitCommit.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment_count" }),
        __metadata("design:type", Number)
    ], CommitCommit.prototype, "commentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer" }),
        __metadata("design:type", CommitCommitGitUser)
    ], CommitCommit.prototype, "committer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CommitCommit.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tree" }),
        __metadata("design:type", CommitCommitTree)
    ], CommitCommit.prototype, "tree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommitCommit.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification" }),
        __metadata("design:type", Verification)
    ], CommitCommit.prototype, "verification", void 0);
    return CommitCommit;
}(SpeakeasyBase));
export { CommitCommit };
var CommitFiles = /** @class */ (function (_super) {
    __extends(CommitFiles, _super);
    function CommitFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additions" }),
        __metadata("design:type", Number)
    ], CommitFiles.prototype, "additions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blob_url" }),
        __metadata("design:type", String)
    ], CommitFiles.prototype, "blobUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changes" }),
        __metadata("design:type", Number)
    ], CommitFiles.prototype, "changes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents_url" }),
        __metadata("design:type", String)
    ], CommitFiles.prototype, "contentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletions" }),
        __metadata("design:type", Number)
    ], CommitFiles.prototype, "deletions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], CommitFiles.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patch" }),
        __metadata("design:type", String)
    ], CommitFiles.prototype, "patch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_filename" }),
        __metadata("design:type", String)
    ], CommitFiles.prototype, "previousFilename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw_url" }),
        __metadata("design:type", String)
    ], CommitFiles.prototype, "rawUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], CommitFiles.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CommitFiles.prototype, "status", void 0);
    return CommitFiles;
}(SpeakeasyBase));
export { CommitFiles };
var CommitParents = /** @class */ (function (_super) {
    __extends(CommitParents, _super);
    function CommitParents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CommitParents.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], CommitParents.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommitParents.prototype, "url", void 0);
    return CommitParents;
}(SpeakeasyBase));
export { CommitParents };
var CommitStats = /** @class */ (function (_super) {
    __extends(CommitStats, _super);
    function CommitStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additions" }),
        __metadata("design:type", Number)
    ], CommitStats.prototype, "additions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletions" }),
        __metadata("design:type", Number)
    ], CommitStats.prototype, "deletions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommitStats.prototype, "total", void 0);
    return CommitStats;
}(SpeakeasyBase));
export { CommitStats };
// Commit
/**
 * Commit
**/
var Commit = /** @class */ (function (_super) {
    __extends(Commit, _super);
    function Commit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", CommitSimpleUser)
    ], Commit.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], Commit.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit" }),
        __metadata("design:type", CommitCommit)
    ], Commit.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer" }),
        __metadata("design:type", CommitSimpleUser)
    ], Commit.prototype, "committer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: CommitFiles }),
        __metadata("design:type", Array)
    ], Commit.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Commit.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], Commit.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parents", elemType: CommitParents }),
        __metadata("design:type", Array)
    ], Commit.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], Commit.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", CommitStats)
    ], Commit.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Commit.prototype, "url", void 0);
    return Commit;
}(SpeakeasyBase));
export { Commit };
