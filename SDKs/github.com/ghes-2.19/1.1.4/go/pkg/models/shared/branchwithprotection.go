package shared



type BranchWithProtectionLinks struct {
    HTML string `json:"html"`
    Self string `json:"self"`
    
}

type BranchWithProtection struct {
    Links BranchWithProtectionLinks `json:"_links"`
    Commit Commit `json:"commit"`
    Name string `json:"name"`
    Pattern *string `json:"pattern,omitempty"`
    Protected bool `json:"protected"`
    Protection BranchProtection `json:"protection"`
    ProtectionURL string `json:"protection_url"`
    RequiredApprovingReviewCount *int64 `json:"required_approving_review_count,omitempty"`
    
}

