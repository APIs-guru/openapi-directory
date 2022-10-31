package shared



type TrustedAdvisorResourcesSummary struct {
    ResourcesFlagged int64 `json:"resourcesFlagged"`
    ResourcesIgnored int64 `json:"resourcesIgnored"`
    ResourcesProcessed int64 `json:"resourcesProcessed"`
    ResourcesSuppressed int64 `json:"resourcesSuppressed"`
    
}

