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
import { Team } from "./team";
import { SimpleUser } from "./simpleuser";
import { StatusCheckPolicy } from "./statuscheckpolicy";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
var ProtectedBranchAllowDeletions = /** @class */ (function (_super) {
    __extends(ProtectedBranchAllowDeletions, _super);
    function ProtectedBranchAllowDeletions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchAllowDeletions.prototype, "enabled", void 0);
    return ProtectedBranchAllowDeletions;
}(SpeakeasyBase));
export { ProtectedBranchAllowDeletions };
var ProtectedBranchAllowForcePushes = /** @class */ (function (_super) {
    __extends(ProtectedBranchAllowForcePushes, _super);
    function ProtectedBranchAllowForcePushes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchAllowForcePushes.prototype, "enabled", void 0);
    return ProtectedBranchAllowForcePushes;
}(SpeakeasyBase));
export { ProtectedBranchAllowForcePushes };
var ProtectedBranchEnforceAdmins = /** @class */ (function (_super) {
    __extends(ProtectedBranchEnforceAdmins, _super);
    function ProtectedBranchEnforceAdmins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchEnforceAdmins.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProtectedBranchEnforceAdmins.prototype, "url", void 0);
    return ProtectedBranchEnforceAdmins;
}(SpeakeasyBase));
export { ProtectedBranchEnforceAdmins };
var ProtectedBranchRequiredConversationResolution = /** @class */ (function (_super) {
    __extends(ProtectedBranchRequiredConversationResolution, _super);
    function ProtectedBranchRequiredConversationResolution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchRequiredConversationResolution.prototype, "enabled", void 0);
    return ProtectedBranchRequiredConversationResolution;
}(SpeakeasyBase));
export { ProtectedBranchRequiredConversationResolution };
var ProtectedBranchRequiredLinearHistory = /** @class */ (function (_super) {
    __extends(ProtectedBranchRequiredLinearHistory, _super);
    function ProtectedBranchRequiredLinearHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchRequiredLinearHistory.prototype, "enabled", void 0);
    return ProtectedBranchRequiredLinearHistory;
}(SpeakeasyBase));
export { ProtectedBranchRequiredLinearHistory };
var ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions = /** @class */ (function (_super) {
    __extends(ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions, _super);
    function ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams", elemType: Team }),
        __metadata("design:type", Array)
    ], ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype, "teams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: SimpleUser }),
        __metadata("design:type", Array)
    ], ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users_url" }),
        __metadata("design:type", String)
    ], ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.prototype, "usersUrl", void 0);
    return ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions;
}(SpeakeasyBase));
export { ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions };
var ProtectedBranchRequiredPullRequestReviews = /** @class */ (function (_super) {
    __extends(ProtectedBranchRequiredPullRequestReviews, _super);
    function ProtectedBranchRequiredPullRequestReviews() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dismiss_stale_reviews" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchRequiredPullRequestReviews.prototype, "dismissStaleReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dismissal_restrictions" }),
        __metadata("design:type", ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions)
    ], ProtectedBranchRequiredPullRequestReviews.prototype, "dismissalRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_code_owner_reviews" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchRequiredPullRequestReviews.prototype, "requireCodeOwnerReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_approving_review_count" }),
        __metadata("design:type", Number)
    ], ProtectedBranchRequiredPullRequestReviews.prototype, "requiredApprovingReviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProtectedBranchRequiredPullRequestReviews.prototype, "url", void 0);
    return ProtectedBranchRequiredPullRequestReviews;
}(SpeakeasyBase));
export { ProtectedBranchRequiredPullRequestReviews };
var ProtectedBranchRequiredSignatures = /** @class */ (function (_super) {
    __extends(ProtectedBranchRequiredSignatures, _super);
    function ProtectedBranchRequiredSignatures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchRequiredSignatures.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProtectedBranchRequiredSignatures.prototype, "url", void 0);
    return ProtectedBranchRequiredSignatures;
}(SpeakeasyBase));
export { ProtectedBranchRequiredSignatures };
// ProtectedBranch
/**
 * Branch protections protect branches
**/
var ProtectedBranch = /** @class */ (function (_super) {
    __extends(ProtectedBranch, _super);
    function ProtectedBranch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_deletions" }),
        __metadata("design:type", ProtectedBranchAllowDeletions)
    ], ProtectedBranch.prototype, "allowDeletions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_force_pushes" }),
        __metadata("design:type", ProtectedBranchAllowForcePushes)
    ], ProtectedBranch.prototype, "allowForcePushes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforce_admins" }),
        __metadata("design:type", ProtectedBranchEnforceAdmins)
    ], ProtectedBranch.prototype, "enforceAdmins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_conversation_resolution" }),
        __metadata("design:type", ProtectedBranchRequiredConversationResolution)
    ], ProtectedBranch.prototype, "requiredConversationResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_linear_history" }),
        __metadata("design:type", ProtectedBranchRequiredLinearHistory)
    ], ProtectedBranch.prototype, "requiredLinearHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_pull_request_reviews" }),
        __metadata("design:type", ProtectedBranchRequiredPullRequestReviews)
    ], ProtectedBranch.prototype, "requiredPullRequestReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_signatures" }),
        __metadata("design:type", ProtectedBranchRequiredSignatures)
    ], ProtectedBranch.prototype, "requiredSignatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_status_checks" }),
        __metadata("design:type", StatusCheckPolicy)
    ], ProtectedBranch.prototype, "requiredStatusChecks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions" }),
        __metadata("design:type", BranchRestrictionPolicy)
    ], ProtectedBranch.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProtectedBranch.prototype, "url", void 0);
    return ProtectedBranch;
}(SpeakeasyBase));
export { ProtectedBranch };
