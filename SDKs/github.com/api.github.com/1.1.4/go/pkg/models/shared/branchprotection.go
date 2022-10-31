package shared



type BranchProtectionAllowDeletions struct {
    Enabled *bool `json:"enabled,omitempty"`
    
}

type BranchProtectionAllowForcePushes struct {
    Enabled *bool `json:"enabled,omitempty"`
    
}

type BranchProtectionRequiredLinearHistory struct {
    Enabled *bool `json:"enabled,omitempty"`
    
}

type BranchProtectionRequiredStatusChecks struct {
    Contexts []string `json:"contexts"`
    ContextsURL *string `json:"contexts_url,omitempty"`
    EnforcementLevel string `json:"enforcement_level"`
    URL *string `json:"url,omitempty"`
    
}

type BranchProtection struct {
    AllowDeletions *BranchProtectionAllowDeletions `json:"allow_deletions,omitempty"`
    AllowForcePushes *BranchProtectionAllowForcePushes `json:"allow_force_pushes,omitempty"`
    Enabled bool `json:"enabled"`
    EnforceAdmins *ProtectedBranchAdminEnforced `json:"enforce_admins,omitempty"`
    Name *string `json:"name,omitempty"`
    ProtectionURL *string `json:"protection_url,omitempty"`
    RequiredLinearHistory *BranchProtectionRequiredLinearHistory `json:"required_linear_history,omitempty"`
    RequiredPullRequestReviews *ProtectedBranchPullRequestReview `json:"required_pull_request_reviews,omitempty"`
    RequiredStatusChecks BranchProtectionRequiredStatusChecks `json:"required_status_checks"`
    Restrictions *BranchRestrictionPolicy `json:"restrictions,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

