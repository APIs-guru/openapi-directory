package shared

type ProtectedBranchAllowDeletions struct {
	Enabled bool `json:"enabled"`
}

type ProtectedBranchAllowForcePushes struct {
	Enabled bool `json:"enabled"`
}

type ProtectedBranchEnforceAdmins struct {
	Enabled bool   `json:"enabled"`
	URL     string `json:"url"`
}

type ProtectedBranchRequiredLinearHistory struct {
	Enabled bool `json:"enabled"`
}

type ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions struct {
	Teams    []Team       `json:"teams"`
	TeamsURL string       `json:"teams_url"`
	URL      string       `json:"url"`
	Users    []SimpleUser `json:"users"`
	UsersURL string       `json:"users_url"`
}

type ProtectedBranchRequiredPullRequestReviews struct {
	DismissStaleReviews          *bool                                                           `json:"dismiss_stale_reviews"`
	DismissalRestrictions        *ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions `json:"dismissal_restrictions"`
	RequireCodeOwnerReviews      *bool                                                           `json:"require_code_owner_reviews"`
	RequiredApprovingReviewCount *int64                                                          `json:"required_approving_review_count"`
	URL                          string                                                          `json:"url"`
}

type ProtectedBranchRequiredSignatures struct {
	Enabled bool   `json:"enabled"`
	URL     string `json:"url"`
}

type ProtectedBranch struct {
	AllowDeletions             *ProtectedBranchAllowDeletions             `json:"allow_deletions"`
	AllowForcePushes           *ProtectedBranchAllowForcePushes           `json:"allow_force_pushes"`
	EnforceAdmins              *ProtectedBranchEnforceAdmins              `json:"enforce_admins"`
	RequiredLinearHistory      *ProtectedBranchRequiredLinearHistory      `json:"required_linear_history"`
	RequiredPullRequestReviews *ProtectedBranchRequiredPullRequestReviews `json:"required_pull_request_reviews"`
	RequiredSignatures         *ProtectedBranchRequiredSignatures         `json:"required_signatures"`
	RequiredStatusChecks       *StatusCheckPolicy                         `json:"required_status_checks"`
	Restrictions               *BranchRestrictionPolicy                   `json:"restrictions"`
	URL                        string                                     `json:"url"`
}
