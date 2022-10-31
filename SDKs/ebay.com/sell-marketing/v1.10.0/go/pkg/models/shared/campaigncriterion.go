package shared



type CampaignCriterion struct {
    AutoSelectFutureInventory *bool `json:"autoSelectFutureInventory,omitempty"`
    CriterionType *string `json:"criterionType,omitempty"`
    SelectionRules []SelectionRule `json:"selectionRules,omitempty"`
    
}

