package shared

type BranchProtectionRequiredConversationResolution struct {
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
	EnforceAdmins                  *ProtectedBranchAdminEnforced                   `json:"enforce_admins"`
	Name                           *string                                         `json:"name"`
	ProtectionURL                  *string                                         `json:"protection_url"`
	RequiredConversationResolution *BranchProtectionRequiredConversationResolution `json:"required_conversation_resolution"`
	RequiredPullRequestReviews     *ProtectedBranchPullRequestReview               `json:"required_pull_request_reviews"`
	RequiredSignatures             *BranchProtectionRequiredSignatures             `json:"required_signatures"`
	RequiredStatusChecks           *BranchProtectionRequiredStatusChecks           `json:"required_status_checks"`
	Restrictions                   *BranchRestrictionPolicy                        `json:"restrictions"`
	URL                            *string                                         `json:"url"`
}
