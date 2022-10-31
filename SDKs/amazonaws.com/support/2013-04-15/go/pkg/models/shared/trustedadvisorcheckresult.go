package shared



type TrustedAdvisorCheckResult struct {
    CategorySpecificSummary TrustedAdvisorCategorySpecificSummary `json:"categorySpecificSummary"`
    CheckID string `json:"checkId"`
    FlaggedResources []TrustedAdvisorResourceDetail `json:"flaggedResources"`
    ResourcesSummary TrustedAdvisorResourcesSummary `json:"resourcesSummary"`
    Status string `json:"status"`
    Timestamp string `json:"timestamp"`
    
}

