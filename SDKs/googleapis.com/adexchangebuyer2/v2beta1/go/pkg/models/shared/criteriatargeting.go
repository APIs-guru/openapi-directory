package shared



type CriteriaTargeting struct {
    ExcludedCriteriaIds []string `json:"excludedCriteriaIds,omitempty"`
    TargetedCriteriaIds []string `json:"targetedCriteriaIds,omitempty"`
    
}

