package shared

type BranchProtectionAllowDeletions struct {
	Enabled *bool `json:"enabled"`
}

type BranchProtectionAllowForcePushes struct {
	Enabled *bool `json:"enabled"`
}

type BranchProtectionRequiredConversationResolution struct {
	Enabled *bool `json:"enabled"`
}

type BranchProtectionRequiredLinearHistory struct {
	Enabled *bool `json:"enabled"`
}

type BranchProtectionRequiredSignatures struct {
	Enabled bool   `json:"enabled"`
	URL     string `json:"url"`
}

type BranchProtectionRequiredStatusChecks struct {
	Contexts         []string `json:"contexts"`
	ContextsURL      *string  `json:"contexts_url"`
	EnforcementLevel *string  `json:"enforcement_level"`
	URL              *string  `json:"url"`
}

type BranchProtection struct {
	AllowDeletions                 *BranchProtectionAllowDeletions                 `json:"allow_deletions"`
	AllowForcePushes               *BranchProtectionAllowForcePushes               `json:"allow_force_pushes"`
	EnforceAdmins                  *ProtectedBranchAdminEnforced                   `json:"enforce_admins"`
	Name                           *string                                         `json:"name"`
	ProtectionURL                  *string                                         `json:"protection_url"`
	RequiredConversationResolution *BranchProtectionRequiredConversationResolution `json:"required_conversation_resolution"`
	RequiredLinearHistory          *BranchProtectionRequiredLinearHistory          `json:"required_linear_history"`
	RequiredPullRequestReviews     *ProtectedBranchPullRequestReview               `json:"required_pull_request_reviews"`
	RequiredSignatures             *BranchProtectionRequiredSignatures             `json:"required_signatures"`
	RequiredStatusChecks           *BranchProtectionRequiredStatusChecks           `json:"required_status_checks"`
	Restrictions                   *BranchRestrictionPolicy                        `json:"restrictions"`
	URL                            *string                                         `json:"url"`
}
