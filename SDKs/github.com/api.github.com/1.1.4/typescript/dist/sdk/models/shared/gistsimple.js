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
