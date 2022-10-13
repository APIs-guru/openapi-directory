package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdateBranchProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions struct {
	Teams []string `json:"teams"`
	Users []string `json:"users"`
}

type ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews struct {
	DismissStaleReviews          *bool                                                                                  `json:"dismiss_stale_reviews"`
	DismissalRestrictions        *ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions `json:"dismissal_restrictions"`
	RequireCodeOwnerReviews      *bool                                                                                  `json:"require_code_owner_reviews"`
	RequiredApprovingReviewCount *int64                                                                                 `json:"required_approving_review_count"`
}

type ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks struct {
	Contexts []string `json:"contexts"`
	Strict   bool     `json:"strict"`
}

type ReposUpdateBranchProtectionRequestBodyRestrictions struct {
	Apps  []string `json:"apps"`
	Teams []string `json:"teams"`
	Users []string `json:"users"`
}

type ReposUpdateBranchProtectionRequestBody struct {
	AllowDeletions             *bool                                                            `json:"allow_deletions"`
	AllowForcePushes           *bool                                                            `json:"allow_force_pushes"`
	EnforceAdmins              bool                                                             `json:"enforce_admins"`
	RequiredLinearHistory      *bool                                                            `json:"required_linear_history"`
	RequiredPullRequestReviews ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews `json:"required_pull_request_reviews"`
	RequiredStatusChecks       ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks       `json:"required_status_checks"`
	Restrictions               ReposUpdateBranchProtectionRequestBodyRestrictions               `json:"restrictions"`
}

type ReposUpdateBranchProtectionRequest struct {
	PathParams ReposUpdateBranchProtectionPathParams
	Request    *ReposUpdateBranchProtectionRequestBody `request:"mediaType=application/json"`
}

type ReposUpdateBranchProtection415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReposUpdateBranchProtectionResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	BasicError                                          *shared.BasicError
	ProtectedBranch                                     *shared.ProtectedBranch
	ReposUpdateBranchProtection415ApplicationJSONObject *ReposUpdateBranchProtection415ApplicationJSON
	ValidationErrorSimple                               *shared.ValidationErrorSimple
}
