package shared

type ProtectedBranchPullRequestReviewDismissalRestrictions struct {
	Teams    []Team       `json:"teams,omitempty"`
	TeamsURL *string      `json:"teams_url,omitempty"`
	URL      *string      `json:"url,omitempty"`
	Users    []SimpleUser `json:"users,omitempty"`
	UsersURL *string      `json:"users_url,omitempty"`
}

// ProtectedBranchPullRequestReview
// Protected Branch Pull Request Review
type ProtectedBranchPullRequestReview struct {
	DismissStaleReviews          bool                                                   `json:"dismiss_stale_reviews"`
	DismissalRestrictions        *ProtectedBranchPullRequestReviewDismissalRestrictions `json:"dismissal_restrictions,omitempty"`
	RequireCodeOwnerReviews      bool                                                   `json:"require_code_owner_reviews"`
	RequiredApprovingReviewCount *int64                                                 `json:"required_approving_review_count,omitempty"`
	URL                          *string                                                `json:"url,omitempty"`
}
