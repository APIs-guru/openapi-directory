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
import { ProtectedBranchAdminEnforced } from "./protectedbranchadminenforced";
import { ProtectedBranchPullRequestReview } from "./protectedbranchpullrequestreview";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
var BranchProtectionRequiredConversationResolution = /** @class */ (function (_super) {
    __extends(BranchProtectionRequiredConversationResolution, _super);
    function BranchProtectionRequiredConversationResolution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], BranchProtectionRequiredConversationResolution.prototype, "enabled", void 0);
    return BranchProtectionRequiredConversationResolution;
}(SpeakeasyBase));
export { BranchProtectionRequiredConversationResolution };
var BranchProtectionRequiredSignatures = /** @class */ (function (_super) {
    __extends(BranchProtectionRequiredSignatures, _super);
    function BranchProtectionRequiredSignatures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], BranchProtectionRequiredSignatures.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchProtectionRequiredSignatures.prototype, "url", void 0);
    return BranchProtectionRequiredSignatures;
}(SpeakeasyBase));
export { BranchProtectionRequiredSignatures };
var BranchProtectionRequiredStatusChecks = /** @class */ (function (_super) {
    __extends(BranchProtectionRequiredStatusChecks, _super);
    function BranchProtectionRequiredStatusChecks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts" }),
        __metadata("design:type", Array)
    ], BranchProtectionRequiredStatusChecks.prototype, "contexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts_url" }),
        __metadata("design:type", String)
    ], BranchProtectionRequiredStatusChecks.prototype, "contextsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforcement_level" }),
        __metadata("design:type", String)
    ], BranchProtectionRequiredStatusChecks.prototype, "enforcementLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchProtectionRequiredStatusChecks.prototype, "url", void 0);
    return BranchProtectionRequiredStatusChecks;
}(SpeakeasyBase));
export { BranchProtectionRequiredStatusChecks };
// BranchProtection
/**
 * Branch Protection
**/
var BranchProtection = /** @class */ (function (_super) {
    __extends(BranchProtection, _super);
    function BranchProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforce_admins" }),
        __metadata("design:type", ProtectedBranchAdminEnforced)
    ], BranchProtection.prototype, "enforceAdmins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BranchProtection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection_url" }),
        __metadata("design:type", String)
    ], BranchProtection.prototype, "protectionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_conversation_resolution" }),
        __metadata("design:type", BranchProtectionRequiredConversationResolution)
    ], BranchProtection.prototype, "requiredConversationResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_pull_request_reviews" }),
        __metadata("design:type", ProtectedBranchPullRequestReview)
    ], BranchProtection.prototype, "requiredPullRequestReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_signatures" }),
        __metadata("design:type", BranchProtectionRequiredSignatures)
    ], BranchProtection.prototype, "requiredSignatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_status_checks" }),
        __metadata("design:type", BranchProtectionRequiredStatusChecks)
    ], BranchProtection.prototype, "requiredStatusChecks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions" }),
        __metadata("design:type", BranchRestrictionPolicy)
    ], BranchProtection.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BranchProtection.prototype, "url", void 0);
    return BranchProtection;
}(SpeakeasyBase));
export { BranchProtection };
