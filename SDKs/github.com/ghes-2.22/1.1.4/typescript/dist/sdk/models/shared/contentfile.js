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
var ContentFileLinks = /** @class */ (function (_super) {
    __extends(ContentFileLinks, _super);
    function ContentFileLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git" }),
        __metadata("design:type", String)
    ], ContentFileLinks.prototype, "git", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], ContentFileLinks.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], ContentFileLinks.prototype, "self", void 0);
    return ContentFileLinks;
}(SpeakeasyBase));
export { ContentFileLinks };
// ContentFile
/**
 * Content File
**/
var ContentFile = /** @class */ (function (_super) {
    __extends(ContentFile, _super);
    function ContentFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", ContentFileLinks)
    ], ContentFile.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], ContentFile.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submodule_git_url" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "submoduleGitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ContentFile.prototype, "url", void 0);
    return ContentFile;
}(SpeakeasyBase));
export { ContentFile };
