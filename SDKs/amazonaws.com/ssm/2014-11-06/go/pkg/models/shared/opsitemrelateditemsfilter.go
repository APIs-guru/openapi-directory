package shared

type OpsItemRelatedItemsFilter struct {
	Key      OpsItemRelatedItemsFilterKeyEnum      `json:"Key"`
	Operator OpsItemRelatedItemsFilterOperatorEnum `json:"Operator"`
	Values   []string                              `json:"Values"`
}
