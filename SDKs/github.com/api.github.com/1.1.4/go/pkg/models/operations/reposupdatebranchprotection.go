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
	Teams []string `json:"teams,omitempty"`
	Users []string `json:"users,omitempty"`
}

type ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews struct {
	DismissStaleReviews          *bool                                                                                  `json:"dismiss_stale_reviews,omitempty"`
	DismissalRestrictions        *ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions `json:"dismissal_restrictions,omitempty"`
	RequireCodeOwnerReviews      *bool                                                                                  `json:"require_code_owner_reviews,omitempty"`
	RequiredApprovingReviewCount *int64                                                                                 `json:"required_approving_review_count,omitempty"`
}

type ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks struct {
	Contexts []string `json:"contexts"`
	Strict   bool     `json:"strict"`
}

type ReposUpdateBranchProtectionRequestBodyRestrictions struct {
	Apps  []string `json:"apps,omitempty"`
	Teams []string `json:"teams"`
	Users []string `json:"users"`
}

type ReposUpdateBranchProtectionRequestBody struct {
	AllowDeletions             *bool                                                            `json:"allow_deletions,omitempty"`
	AllowForcePushes           *bool                                                            `json:"allow_force_pushes,omitempty"`
	EnforceAdmins              bool                                                             `json:"enforce_admins"`
	RequiredLinearHistory      *bool                                                            `json:"required_linear_history,omitempty"`
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
