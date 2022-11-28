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
// GitCommitAuthor
/**
 * Identifying information for the git-user
**/
var GitCommitAuthor = /** @class */ (function (_super) {
    __extends(GitCommitAuthor, _super);
    function GitCommitAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GitCommitAuthor.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GitCommitAuthor.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitCommitAuthor.prototype, "name", void 0);
    return GitCommitAuthor;
}(SpeakeasyBase));
export { GitCommitAuthor };
// GitCommitCommitter
/**
 * Identifying information for the git-user
**/
var GitCommitCommitter = /** @class */ (function (_super) {
    __extends(GitCommitCommitter, _super);
    function GitCommitCommitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GitCommitCommitter.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GitCommitCommitter.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitCommitCommitter.prototype, "name", void 0);
    return GitCommitCommitter;
}(SpeakeasyBase));
export { GitCommitCommitter };
var GitCommitParents = /** @class */ (function (_super) {
    __extends(GitCommitParents, _super);
    function GitCommitParents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], GitCommitParents.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], GitCommitParents.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GitCommitParents.prototype, "url", void 0);
    return GitCommitParents;
}(SpeakeasyBase));
export { GitCommitParents };
var GitCommitTree = /** @class */ (function (_super) {
    __extends(GitCommitTree, _super);
    function GitCommitTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], GitCommitTree.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GitCommitTree.prototype, "url", void 0);
    return GitCommitTree;
}(SpeakeasyBase));
export { GitCommitTree };
var GitCommitVerification = /** @class */ (function (_super) {
    __extends(GitCommitVerification, _super);
    function GitCommitVerification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", String)
    ], GitCommitVerification.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], GitCommitVerification.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signature" }),
        __metadata("design:type", String)
    ], GitCommitVerification.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], GitCommitVerification.prototype, "verified", void 0);
    return GitCommitVerification;
}(SpeakeasyBase));
export { GitCommitVerification };
// GitCommit
/**
 * Low-level Git commit operations within a repository
**/
var GitCommit = /** @class */ (function (_super) {
    __extends(GitCommit, _super);
    function GitCommit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", GitCommitAuthor)
    ], GitCommit.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer" }),
        __metadata("design:type", GitCommitCommitter)
    ], GitCommit.prototype, "committer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], GitCommit.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GitCommit.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], GitCommit.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parents", elemType: GitCommitParents }),
        __metadata("design:type", Array)
    ], GitCommit.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], GitCommit.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tree" }),
        __metadata("design:type", GitCommitTree)
    ], GitCommit.prototype, "tree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GitCommit.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification" }),
        __metadata("design:type", GitCommitVerification)
    ], GitCommit.prototype, "verification", void 0);
    return GitCommit;
}(SpeakeasyBase));
export { GitCommit };
