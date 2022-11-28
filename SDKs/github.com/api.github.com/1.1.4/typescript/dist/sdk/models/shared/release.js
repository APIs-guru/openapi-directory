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
import { ReleaseAsset } from "./releaseasset";
import { SimpleUser } from "./simpleuser";
// Release
/**
 * A release.
**/
var Release = /** @class */ (function (_super) {
    __extends(Release, _super);
    function Release() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: ReleaseAsset }),
        __metadata("design:type", Array)
    ], Release.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets_url" }),
        __metadata("design:type", String)
    ], Release.prototype, "assetsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", SimpleUser)
    ], Release.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], Release.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_html" }),
        __metadata("design:type", String)
    ], Release.prototype, "bodyHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_text" }),
        __metadata("design:type", String)
    ], Release.prototype, "bodyText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Release.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", Boolean)
    ], Release.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Release.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Release.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Release.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], Release.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prerelease" }),
        __metadata("design:type", Boolean)
    ], Release.prototype, "prerelease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published_at" }),
        __metadata("design:type", Date)
    ], Release.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_name" }),
        __metadata("design:type", String)
    ], Release.prototype, "tagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tarball_url" }),
        __metadata("design:type", String)
    ], Release.prototype, "tarballUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_commitish" }),
        __metadata("design:type", String)
    ], Release.prototype, "targetCommitish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_url" }),
        __metadata("design:type", String)
    ], Release.prototype, "uploadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Release.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zipball_url" }),
        __metadata("design:type", String)
    ], Release.prototype, "zipballUrl", void 0);
    return Release;
}(SpeakeasyBase));
export { Release };
