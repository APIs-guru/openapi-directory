package shared

// CampaignCriterion
// This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign.
type CampaignCriterion struct {
	AutoSelectFutureInventory *bool           `json:"autoSelectFutureInventory,omitempty"`
	CriterionType             *string         `json:"criterionType,omitempty"`
	SelectionRules            []SelectionRule `json:"selectionRules,omitempty"`
}
