package shared

type BranchProtectionAllowDeletions struct {
	Enabled *bool `json:"enabled"`
}

type BranchProtectionAllowForcePushes struct {
	Enabled *bool `json:"enabled"`
}

type BranchProtectionRequiredLinearHistory struct {
	Enabled *bool `json:"enabled"`
}

type BranchProtectionRequiredStatusChecks struct {
	Contexts         []string `json:"contexts"`
	ContextsURL      *string  `json:"contexts_url"`
	EnforcementLevel string   `json:"enforcement_level"`
	URL              *string  `json:"url"`
}

type BranchProtection struct {
	AllowDeletions             *BranchProtectionAllowDeletions        `json:"allow_deletions"`
	AllowForcePushes           *BranchProtectionAllowForcePushes      `json:"allow_force_pushes"`
	Enabled                    bool                                   `json:"enabled"`
	EnforceAdmins              *ProtectedBranchAdminEnforced          `json:"enforce_admins"`
	Name                       *string                                `json:"name"`
	ProtectionURL              *string                                `json:"protection_url"`
	RequiredLinearHistory      *BranchProtectionRequiredLinearHistory `json:"required_linear_history"`
	RequiredPullRequestReviews *ProtectedBranchPullRequestReview      `json:"required_pull_request_reviews"`
	RequiredStatusChecks       BranchProtectionRequiredStatusChecks   `json:"required_status_checks"`
	Restrictions               *BranchRestrictionPolicy               `json:"restrictions"`
	URL                        *string                                `json:"url"`
}
