package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdatePullRequestReviewProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

// ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions
// Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
type ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions struct {
	Teams []string `json:"teams,omitempty"`
	Users []string `json:"users,omitempty"`
}

type ReposUpdatePullRequestReviewProtectionRequestBody struct {
	DismissStaleReviews          *bool                                                                   `json:"dismiss_stale_reviews,omitempty"`
	DismissalRestrictions        *ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions `json:"dismissal_restrictions,omitempty"`
	RequireCodeOwnerReviews      *bool                                                                   `json:"require_code_owner_reviews,omitempty"`
	RequiredApprovingReviewCount *int64                                                                  `json:"required_approving_review_count,omitempty"`
}

type ReposUpdatePullRequestReviewProtectionRequest struct {
	PathParams ReposUpdatePullRequestReviewProtectionPathParams
	Request    *ReposUpdatePullRequestReviewProtectionRequestBody `request:"mediaType=application/json"`
}

type ReposUpdatePullRequestReviewProtectionResponse struct {
	ContentType                      string
	StatusCode                       int64
	ProtectedBranchPullRequestReview *shared.ProtectedBranchPullRequestReview
	ValidationError                  *shared.ValidationError
}
