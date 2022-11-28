package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdateBranchProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

// ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions
// Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
type ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions struct {
	Teams []string `json:"teams,omitempty"`
	Users []string `json:"users,omitempty"`
}

// ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews
// Require at least one approving review on a pull request, before merging. Set to `null` to disable.
type ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews struct {
	DismissStaleReviews          *bool                                                                                  `json:"dismiss_stale_reviews,omitempty"`
	DismissalRestrictions        *ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions `json:"dismissal_restrictions,omitempty"`
	RequireCodeOwnerReviews      *bool                                                                                  `json:"require_code_owner_reviews,omitempty"`
	RequiredApprovingReviewCount *int64                                                                                 `json:"required_approving_review_count,omitempty"`
}

// ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks
// Require status checks to pass before merging. Set to `null` to disable.
type ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks struct {
	Contexts []string `json:"contexts"`
	Strict   bool     `json:"strict"`
}

// ReposUpdateBranchProtectionRequestBodyRestrictions
// Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
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

type ReposUpdateBranchProtection415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReposUpdateBranchProtectionRequest struct {
	PathParams ReposUpdateBranchProtectionPathParams
	Request    *ReposUpdateBranchProtectionRequestBody `request:"mediaType=application/json"`
}

type ReposUpdateBranchProtectionResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	BasicError                                          *shared.BasicError
	ProtectedBranch                                     *shared.ProtectedBranch
	ReposUpdateBranchProtection415ApplicationJSONObject *ReposUpdateBranchProtection415ApplicationJSON
	ValidationErrorSimple                               *shared.ValidationErrorSimple
}
