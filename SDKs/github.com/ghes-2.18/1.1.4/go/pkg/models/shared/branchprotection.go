package shared

type BranchProtectionRequiredConversationResolution struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type BranchProtectionRequiredSignatures struct {
	Enabled bool   `json:"enabled"`
	URL     string `json:"url"`
}

type BranchProtectionRequiredStatusChecks struct {
	Contexts         []string `json:"contexts"`
	ContextsURL      *string  `json:"contexts_url,omitempty"`
	EnforcementLevel *string  `json:"enforcement_level,omitempty"`
	URL              *string  `json:"url,omitempty"`
}

// BranchProtection
// Branch Protection
type BranchProtection struct {
	EnforceAdmins                  *ProtectedBranchAdminEnforced                   `json:"enforce_admins,omitempty"`
	Name                           *string                                         `json:"name,omitempty"`
	ProtectionURL                  *string                                         `json:"protection_url,omitempty"`
	RequiredConversationResolution *BranchProtectionRequiredConversationResolution `json:"required_conversation_resolution,omitempty"`
	RequiredPullRequestReviews     *ProtectedBranchPullRequestReview               `json:"required_pull_request_reviews,omitempty"`
	RequiredSignatures             *BranchProtectionRequiredSignatures             `json:"required_signatures,omitempty"`
	RequiredStatusChecks           *BranchProtectionRequiredStatusChecks           `json:"required_status_checks,omitempty"`
	Restrictions                   *BranchRestrictionPolicy                        `json:"restrictions,omitempty"`
	URL                            *string                                         `json:"url,omitempty"`
}
