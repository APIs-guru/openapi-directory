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
var LicenseContentLinks = /** @class */ (function (_super) {
    __extends(LicenseContentLinks, _super);
    function LicenseContentLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git" }),
        __metadata("design:type", String)
    ], LicenseContentLinks.prototype, "git", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], LicenseContentLinks.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], LicenseContentLinks.prototype, "self", void 0);
    return LicenseContentLinks;
}(SpeakeasyBase));
export { LicenseContentLinks };
var LicenseContentLicenseSimple = /** @class */ (function (_super) {
    __extends(LicenseContentLicenseSimple, _super);
    function LicenseContentLicenseSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], LicenseContentLicenseSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], LicenseContentLicenseSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LicenseContentLicenseSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], LicenseContentLicenseSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], LicenseContentLicenseSimple.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], LicenseContentLicenseSimple.prototype, "url", void 0);
    return LicenseContentLicenseSimple;
}(SpeakeasyBase));
export { LicenseContentLicenseSimple };
// LicenseContent
/**
 * License Content
**/
var LicenseContent = /** @class */ (function (_super) {
    __extends(LicenseContent, _super);
    function LicenseContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", LicenseContentLinks)
    ], LicenseContent.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", LicenseContentLicenseSimple)
    ], LicenseContent.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], LicenseContent.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], LicenseContent.prototype, "url", void 0);
    return LicenseContent;
}(SpeakeasyBase));
export { LicenseContent };
