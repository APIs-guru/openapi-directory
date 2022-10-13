package shared

type CampaignCriterion struct {
	AutoSelectFutureInventory *bool           `json:"autoSelectFutureInventory"`
	CriterionType             *string         `json:"criterionType"`
	SelectionRules            []SelectionRule `json:"selectionRules"`
}
