package shared

// OpsItemRelatedItemsFilter
// Describes a filter for a specific list of related-item resources.
type OpsItemRelatedItemsFilter struct {
	Key      OpsItemRelatedItemsFilterKeyEnum      `json:"Key"`
	Operator OpsItemRelatedItemsFilterOperatorEnum `json:"Operator"`
	Values   []string                              `json:"Values"`
}
