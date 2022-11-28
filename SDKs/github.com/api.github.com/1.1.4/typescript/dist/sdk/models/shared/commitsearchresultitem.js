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
import { MinimalRepository } from "./minimalrepository";
import { SearchResultTextMatches } from "./searchresulttextmatches";
var CommitSearchResultItemSimpleUser = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemSimpleUser, _super);
    function CommitSearchResultItemSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CommitSearchResultItemSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], CommitSearchResultItemSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemSimpleUser.prototype, "url", void 0);
    return CommitSearchResultItemSimpleUser;
}(SpeakeasyBase));
export { CommitSearchResultItemSimpleUser };
var CommitSearchResultItemCommitAuthor = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemCommitAuthor, _super);
    function CommitSearchResultItemCommitAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], CommitSearchResultItemCommitAuthor.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitAuthor.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitAuthor.prototype, "name", void 0);
    return CommitSearchResultItemCommitAuthor;
}(SpeakeasyBase));
export { CommitSearchResultItemCommitAuthor };
var CommitSearchResultItemCommitGitUser = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemCommitGitUser, _super);
    function CommitSearchResultItemCommitGitUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitGitUser.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitGitUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitGitUser.prototype, "name", void 0);
    return CommitSearchResultItemCommitGitUser;
}(SpeakeasyBase));
export { CommitSearchResultItemCommitGitUser };
var CommitSearchResultItemCommitTree = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemCommitTree, _super);
    function CommitSearchResultItemCommitTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitTree.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitTree.prototype, "url", void 0);
    return CommitSearchResultItemCommitTree;
}(SpeakeasyBase));
export { CommitSearchResultItemCommitTree };
var CommitSearchResultItemCommit = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemCommit, _super);
    function CommitSearchResultItemCommit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", CommitSearchResultItemCommitAuthor)
    ], CommitSearchResultItemCommit.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment_count" }),
        __metadata("design:type", Number)
    ], CommitSearchResultItemCommit.prototype, "commentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer" }),
        __metadata("design:type", CommitSearchResultItemCommitGitUser)
    ], CommitSearchResultItemCommit.prototype, "committer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommit.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tree" }),
        __metadata("design:type", CommitSearchResultItemCommitTree)
    ], CommitSearchResultItemCommit.prototype, "tree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommit.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification" }),
        __metadata("design:type", Verification)
    ], CommitSearchResultItemCommit.prototype, "verification", void 0);
    return CommitSearchResultItemCommit;
}(SpeakeasyBase));
export { CommitSearchResultItemCommit };
var CommitSearchResultItemGitUser = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemGitUser, _super);
    function CommitSearchResultItemGitUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemGitUser.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemGitUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemGitUser.prototype, "name", void 0);
    return CommitSearchResultItemGitUser;
}(SpeakeasyBase));
export { CommitSearchResultItemGitUser };
var CommitSearchResultItemParents = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemParents, _super);
    function CommitSearchResultItemParents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemParents.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemParents.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemParents.prototype, "url", void 0);
    return CommitSearchResultItemParents;
}(SpeakeasyBase));
export { CommitSearchResultItemParents };
// CommitSearchResultItem
/**
 * Commit Search Result Item
**/
var CommitSearchResultItem = /** @class */ (function (_super) {
    __extends(CommitSearchResultItem, _super);
    function CommitSearchResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", CommitSearchResultItemSimpleUser)
    ], CommitSearchResultItem.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "commentsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit" }),
        __metadata("design:type", CommitSearchResultItemCommit)
    ], CommitSearchResultItem.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer" }),
        __metadata("design:type", CommitSearchResultItemGitUser)
    ], CommitSearchResultItem.prototype, "committer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parents", elemType: CommitSearchResultItemParents }),
        __metadata("design:type", Array)
    ], CommitSearchResultItem.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", MinimalRepository)
    ], CommitSearchResultItem.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], CommitSearchResultItem.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text_matches", elemType: SearchResultTextMatches }),
        __metadata("design:type", Array)
    ], CommitSearchResultItem.prototype, "textMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "url", void 0);
    return CommitSearchResultItem;
}(SpeakeasyBase));
export { CommitSearchResultItem };
