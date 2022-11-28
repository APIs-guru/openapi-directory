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
import { PagesHttpsCertificate } from "./pageshttpscertificate";
import { PagesSourceHash } from "./pagessourcehash";
export var PageStatusEnum;
(function (PageStatusEnum) {
    PageStatusEnum["Built"] = "built";
    PageStatusEnum["Building"] = "building";
    PageStatusEnum["Errored"] = "errored";
})(PageStatusEnum || (PageStatusEnum = {}));
// Page
/**
 * The configuration for GitHub Pages for a repository.
**/
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cname" }),
        __metadata("design:type", String)
    ], Page.prototype, "cname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_404" }),
        __metadata("design:type", Boolean)
    ], Page.prototype, "custom404", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Page.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=https_certificate" }),
        __metadata("design:type", PagesHttpsCertificate)
    ], Page.prototype, "httpsCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=https_enforced" }),
        __metadata("design:type", Boolean)
    ], Page.prototype, "httpsEnforced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], Page.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", PagesSourceHash)
    ], Page.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Page.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Page.prototype, "url", void 0);
    return Page;
}(SpeakeasyBase));
export { Page };
