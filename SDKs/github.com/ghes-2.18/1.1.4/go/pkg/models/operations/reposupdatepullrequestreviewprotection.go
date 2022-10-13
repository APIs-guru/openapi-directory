package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdatePullRequestReviewProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions struct {
	Teams []string `json:"teams"`
	Users []string `json:"users"`
}

type ReposUpdatePullRequestReviewProtectionRequestBody struct {
	DismissStaleReviews          *bool                                                                   `json:"dismiss_stale_reviews"`
	DismissalRestrictions        *ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions `json:"dismissal_restrictions"`
	RequireCodeOwnerReviews      *bool                                                                   `json:"require_code_owner_reviews"`
	RequiredApprovingReviewCount *int64                                                                  `json:"required_approving_review_count"`
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
