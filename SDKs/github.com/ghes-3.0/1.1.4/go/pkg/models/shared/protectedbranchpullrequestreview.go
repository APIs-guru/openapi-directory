package shared

type ProtectedBranchPullRequestReviewDismissalRestrictions struct {
	Teams    []Team       `json:"teams"`
	TeamsURL *string      `json:"teams_url"`
	URL      *string      `json:"url"`
	Users    []SimpleUser `json:"users"`
	UsersURL *string      `json:"users_url"`
}

type ProtectedBranchPullRequestReview struct {
	DismissStaleReviews          bool                                                   `json:"dismiss_stale_reviews"`
	DismissalRestrictions        *ProtectedBranchPullRequestReviewDismissalRestrictions `json:"dismissal_restrictions"`
	RequireCodeOwnerReviews      bool                                                   `json:"require_code_owner_reviews"`
	RequiredApprovingReviewCount *int64                                                 `json:"required_approving_review_count"`
	URL                          *string                                                `json:"url"`
}
