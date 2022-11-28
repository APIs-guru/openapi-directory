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
import * as shared from "../shared";
var ReposUpdateBranchProtectionPathParams = /** @class */ (function (_super) {
    __extends(ReposUpdateBranchProtectionPathParams, _super);
    function ReposUpdateBranchProtectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposUpdateBranchProtectionPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposUpdateBranchProtectionPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposUpdateBranchProtectionPathParams.prototype, "repo", void 0);
    return ReposUpdateBranchProtectionPathParams;
}(SpeakeasyBase));
export { ReposUpdateBranchProtectionPathParams };
// ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions
/**
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
var ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions = /** @class */ (function (_super) {
    __extends(ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions, _super);
    function ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams" }),
        __metadata("design:type", Array)
    ], ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions.prototype, "teams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", Array)
    ], ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions.prototype, "users", void 0);
    return ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions;
}(SpeakeasyBase));
export { ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions };
// ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews
/**
 * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
**/
var ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews = /** @class */ (function (_super) {
    __extends(ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews, _super);
    function ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dismiss_stale_reviews" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews.prototype, "dismissStaleReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dismissal_restrictions" }),
        __metadata("design:type", ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions)
    ], ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews.prototype, "dismissalRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_code_owner_reviews" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews.prototype, "requireCodeOwnerReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_approving_review_count" }),
        __metadata("design:type", Number)
    ], ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews.prototype, "requiredApprovingReviewCount", void 0);
    return ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews;
}(SpeakeasyBase));
export { ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews };
// ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks
/**
 * Require status checks to pass before merging. Set to `null` to disable.
**/
var ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks = /** @class */ (function (_super) {
    __extends(ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks, _super);
    function ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts" }),
        __metadata("design:type", Array)
    ], ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks.prototype, "contexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strict" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks.prototype, "strict", void 0);
    return ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks;
}(SpeakeasyBase));
export { ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks };
// ReposUpdateBranchProtectionRequestBodyRestrictions
/**
 * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
**/
var ReposUpdateBranchProtectionRequestBodyRestrictions = /** @class */ (function (_super) {
    __extends(ReposUpdateBranchProtectionRequestBodyRestrictions, _super);
    function ReposUpdateBranchProtectionRequestBodyRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apps" }),
        __metadata("design:type", Array)
    ], ReposUpdateBranchProtectionRequestBodyRestrictions.prototype, "apps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams" }),
        __metadata("design:type", Array)
    ], ReposUpdateBranchProtectionRequestBodyRestrictions.prototype, "teams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", Array)
    ], ReposUpdateBranchProtectionRequestBodyRestrictions.prototype, "users", void 0);
    return ReposUpdateBranchProtectionRequestBodyRestrictions;
}(SpeakeasyBase));
export { ReposUpdateBranchProtectionRequestBodyRestrictions };
var ReposUpdateBranchProtectionRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdateBranchProtectionRequestBody, _super);
    function ReposUpdateBranchProtectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_deletions" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateBranchProtectionRequestBody.prototype, "allowDeletions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_force_pushes" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateBranchProtectionRequestBody.prototype, "allowForcePushes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforce_admins" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateBranchProtectionRequestBody.prototype, "enforceAdmins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_linear_history" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateBranchProtectionRequestBody.prototype, "requiredLinearHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_pull_request_reviews" }),
        __metadata("design:type", ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews)
    ], ReposUpdateBranchProtectionRequestBody.prototype, "requiredPullRequestReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_status_checks" }),
        __metadata("design:type", ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks)
    ], ReposUpdateBranchProtectionRequestBody.prototype, "requiredStatusChecks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions" }),
        __metadata("design:type", ReposUpdateBranchProtectionRequestBodyRestrictions)
    ], ReposUpdateBranchProtectionRequestBody.prototype, "restrictions", void 0);
    return ReposUpdateBranchProtectionRequestBody;
}(SpeakeasyBase));
export { ReposUpdateBranchProtectionRequestBody };
var ReposUpdateBranchProtection415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposUpdateBranchProtection415ApplicationJson, _super);
    function ReposUpdateBranchProtection415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposUpdateBranchProtection415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposUpdateBranchProtection415ApplicationJson.prototype, "message", void 0);
    return ReposUpdateBranchProtection415ApplicationJson;
}(SpeakeasyBase));
export { ReposUpdateBranchProtection415ApplicationJson };
var ReposUpdateBranchProtectionRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateBranchProtectionRequest, _super);
    function ReposUpdateBranchProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposUpdateBranchProtectionPathParams)
    ], ReposUpdateBranchProtectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdateBranchProtectionRequestBody)
    ], ReposUpdateBranchProtectionRequest.prototype, "request", void 0);
    return ReposUpdateBranchProtectionRequest;
}(SpeakeasyBase));
export { ReposUpdateBranchProtectionRequest };
var ReposUpdateBranchProtectionResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateBranchProtectionResponse, _super);
    function ReposUpdateBranchProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposUpdateBranchProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposUpdateBranchProtectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposUpdateBranchProtectionResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProtectedBranch)
    ], ReposUpdateBranchProtectionResponse.prototype, "protectedBranch", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposUpdateBranchProtection415ApplicationJson)
    ], ReposUpdateBranchProtectionResponse.prototype, "reposUpdateBranchProtection415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ReposUpdateBranchProtectionResponse.prototype, "validationErrorSimple", void 0);
    return ReposUpdateBranchProtectionResponse;
}(SpeakeasyBase));
export { ReposUpdateBranchProtectionResponse };
