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
import { Commit } from "./commit";
import { BranchProtection } from "./branchprotection";
var BranchWithProtectionLinks = /** @class */ (function (_super) {
    __extends(BranchWithProtectionLinks, _super);
    function BranchWithProtectionLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], BranchWithProtectionLinks.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], BranchWithProtectionLinks.prototype, "self", void 0);
    return BranchWithProtectionLinks;
}(SpeakeasyBase));
export { BranchWithProtectionLinks };
// BranchWithProtection
/**
 * Branch With Protection
**/
var BranchWithProtection = /** @class */ (function (_super) {
    __extends(BranchWithProtection, _super);
    function BranchWithProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", BranchWithProtectionLinks)
    ], BranchWithProtection.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit" }),
        __metadata("design:type", Commit)
    ], BranchWithProtection.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BranchWithProtection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pattern" }),
        __metadata("design:type", String)
    ], BranchWithProtection.prototype, "pattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protected" }),
        __metadata("design:type", Boolean)
    ], BranchWithProtection.prototype, "protected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", BranchProtection)
    ], BranchWithProtection.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection_url" }),
        __metadata("design:type", String)
    ], BranchWithProtection.prototype, "protectionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_approving_review_count" }),
        __metadata("design:type", Number)
    ], BranchWithProtection.prototype, "requiredApprovingReviewCount", void 0);
    return BranchWithProtection;
}(SpeakeasyBase));
export { BranchWithProtection };
