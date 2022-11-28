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
var ContentDirectoryLinks = /** @class */ (function (_super) {
    __extends(ContentDirectoryLinks, _super);
    function ContentDirectoryLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git" }),
        __metadata("design:type", String)
    ], ContentDirectoryLinks.prototype, "git", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], ContentDirectoryLinks.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], ContentDirectoryLinks.prototype, "self", void 0);
    return ContentDirectoryLinks;
}(SpeakeasyBase));
export { ContentDirectoryLinks };
var ContentDirectory = /** @class */ (function (_super) {
    __extends(ContentDirectory, _super);
    function ContentDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", ContentDirectoryLinks)
    ], ContentDirectory.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ContentDirectory.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], ContentDirectory.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], ContentDirectory.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], ContentDirectory.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContentDirectory.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ContentDirectory.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], ContentDirectory.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], ContentDirectory.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ContentDirectory.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ContentDirectory.prototype, "url", void 0);
    return ContentDirectory;
}(SpeakeasyBase));
export { ContentDirectory };
