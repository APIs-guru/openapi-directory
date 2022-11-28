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
var ProtectedBranchPullRequestReviewDismissalRestrictions = /** @class */ (function (_super) {
    __extends(ProtectedBranchPullRequestReviewDismissalRestrictions, _super);
    function ProtectedBranchPullRequestReviewDismissalRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams", elemType: Team }),
        __metadata("design:type", Array)
    ], ProtectedBranchPullRequestReviewDismissalRestrictions.prototype, "teams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams_url" }),
        __metadata("design:type", String)
    ], ProtectedBranchPullRequestReviewDismissalRestrictions.prototype, "teamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProtectedBranchPullRequestReviewDismissalRestrictions.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: SimpleUser }),
        __metadata("design:type", Array)
    ], ProtectedBranchPullRequestReviewDismissalRestrictions.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users_url" }),
        __metadata("design:type", String)
    ], ProtectedBranchPullRequestReviewDismissalRestrictions.prototype, "usersUrl", void 0);
    return ProtectedBranchPullRequestReviewDismissalRestrictions;
}(SpeakeasyBase));
export { ProtectedBranchPullRequestReviewDismissalRestrictions };
// ProtectedBranchPullRequestReview
/**
 * Protected Branch Pull Request Review
**/
var ProtectedBranchPullRequestReview = /** @class */ (function (_super) {
    __extends(ProtectedBranchPullRequestReview, _super);
    function ProtectedBranchPullRequestReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dismiss_stale_reviews" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchPullRequestReview.prototype, "dismissStaleReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dismissal_restrictions" }),
        __metadata("design:type", ProtectedBranchPullRequestReviewDismissalRestrictions)
    ], ProtectedBranchPullRequestReview.prototype, "dismissalRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_code_owner_reviews" }),
        __metadata("design:type", Boolean)
    ], ProtectedBranchPullRequestReview.prototype, "requireCodeOwnerReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_approving_review_count" }),
        __metadata("design:type", Number)
    ], ProtectedBranchPullRequestReview.prototype, "requiredApprovingReviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ProtectedBranchPullRequestReview.prototype, "url", void 0);
    return ProtectedBranchPullRequestReview;
}(SpeakeasyBase));
export { ProtectedBranchPullRequestReview };
