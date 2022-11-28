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
	DismissStaleReviews          *bool                                                           `json:"dismiss_stale_reviews,omitempty"`
	DismissalRestrictions        *ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions `json:"dismissal_restrictions,omitempty"`
	RequireCodeOwnerReviews      *bool                                                           `json:"require_code_owner_reviews,omitempty"`
	RequiredApprovingReviewCount *int64                                                          `json:"required_approving_review_count,omitempty"`
	URL                          string                                                          `json:"url"`
}

type ProtectedBranchRequiredSignatures struct {
	Enabled bool   `json:"enabled"`
	URL     string `json:"url"`
}

// ProtectedBranch
// Branch protections protect branches
type ProtectedBranch struct {
	AllowDeletions             *ProtectedBranchAllowDeletions             `json:"allow_deletions,omitempty"`
	AllowForcePushes           *ProtectedBranchAllowForcePushes           `json:"allow_force_pushes,omitempty"`
	EnforceAdmins              *ProtectedBranchEnforceAdmins              `json:"enforce_admins,omitempty"`
	RequiredLinearHistory      *ProtectedBranchRequiredLinearHistory      `json:"required_linear_history,omitempty"`
	RequiredPullRequestReviews *ProtectedBranchRequiredPullRequestReviews `json:"required_pull_request_reviews,omitempty"`
	RequiredSignatures         *ProtectedBranchRequiredSignatures         `json:"required_signatures,omitempty"`
	RequiredStatusChecks       *StatusCheckPolicy                         `json:"required_status_checks,omitempty"`
	Restrictions               *BranchRestrictionPolicy                   `json:"restrictions,omitempty"`
	URL                        string                                     `json:"url"`
}
