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
var FileCommitCommitAuthor = /** @class */ (function (_super) {
    __extends(FileCommitCommitAuthor, _super);
    function FileCommitCommitAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], FileCommitCommitAuthor.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], FileCommitCommitAuthor.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FileCommitCommitAuthor.prototype, "name", void 0);
    return FileCommitCommitAuthor;
}(SpeakeasyBase));
export { FileCommitCommitAuthor };
var FileCommitCommitCommitter = /** @class */ (function (_super) {
    __extends(FileCommitCommitCommitter, _super);
    function FileCommitCommitCommitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], FileCommitCommitCommitter.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], FileCommitCommitCommitter.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FileCommitCommitCommitter.prototype, "name", void 0);
    return FileCommitCommitCommitter;
}(SpeakeasyBase));
export { FileCommitCommitCommitter };
var FileCommitCommitParents = /** @class */ (function (_super) {
    __extends(FileCommitCommitParents, _super);
    function FileCommitCommitParents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FileCommitCommitParents.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], FileCommitCommitParents.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FileCommitCommitParents.prototype, "url", void 0);
    return FileCommitCommitParents;
}(SpeakeasyBase));
export { FileCommitCommitParents };
var FileCommitCommitTree = /** @class */ (function (_super) {
    __extends(FileCommitCommitTree, _super);
    function FileCommitCommitTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], FileCommitCommitTree.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FileCommitCommitTree.prototype, "url", void 0);
    return FileCommitCommitTree;
}(SpeakeasyBase));
export { FileCommitCommitTree };
var FileCommitCommitVerification = /** @class */ (function (_super) {
    __extends(FileCommitCommitVerification, _super);
    function FileCommitCommitVerification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", String)
    ], FileCommitCommitVerification.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], FileCommitCommitVerification.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signature" }),
        __metadata("design:type", String)
    ], FileCommitCommitVerification.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], FileCommitCommitVerification.prototype, "verified", void 0);
    return FileCommitCommitVerification;
}(SpeakeasyBase));
export { FileCommitCommitVerification };
var FileCommitCommit = /** @class */ (function (_super) {
    __extends(FileCommitCommit, _super);
    function FileCommitCommit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", FileCommitCommitAuthor)
    ], FileCommitCommit.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer" }),
        __metadata("design:type", FileCommitCommitCommitter)
    ], FileCommitCommit.prototype, "committer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FileCommitCommit.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], FileCommitCommit.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], FileCommitCommit.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parents", elemType: FileCommitCommitParents }),
        __metadata("design:type", Array)
    ], FileCommitCommit.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], FileCommitCommit.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tree" }),
        __metadata("design:type", FileCommitCommitTree)
    ], FileCommitCommit.prototype, "tree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FileCommitCommit.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification" }),
        __metadata("design:type", FileCommitCommitVerification)
    ], FileCommitCommit.prototype, "verification", void 0);
    return FileCommitCommit;
}(SpeakeasyBase));
export { FileCommitCommit };
var FileCommitContentLinks = /** @class */ (function (_super) {
    __extends(FileCommitContentLinks, _super);
    function FileCommitContentLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git" }),
        __metadata("design:type", String)
    ], FileCommitContentLinks.prototype, "git", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], FileCommitContentLinks.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], FileCommitContentLinks.prototype, "self", void 0);
    return FileCommitContentLinks;
}(SpeakeasyBase));
export { FileCommitContentLinks };
var FileCommitContent = /** @class */ (function (_super) {
    __extends(FileCommitContent, _super);
    function FileCommitContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", FileCommitContentLinks)
    ], FileCommitContent.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], FileCommitContent.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], FileCommitContent.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], FileCommitContent.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FileCommitContent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], FileCommitContent.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], FileCommitContent.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], FileCommitContent.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FileCommitContent.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FileCommitContent.prototype, "url", void 0);
    return FileCommitContent;
}(SpeakeasyBase));
export { FileCommitContent };
// FileCommit
/**
 * File Commit
**/
var FileCommit = /** @class */ (function (_super) {
    __extends(FileCommit, _super);
    function FileCommit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit" }),
        __metadata("design:type", FileCommitCommit)
    ], FileCommit.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", FileCommitContent)
    ], FileCommit.prototype, "content", void 0);
    return FileCommit;
}(SpeakeasyBase));
export { FileCommit };
