package shared

// OpsItemFilter
// Describes an OpsItem filter.
type OpsItemFilter struct {
	Key      OpsItemFilterKeyEnum      `json:"Key"`
	Operator OpsItemFilterOperatorEnum `json:"Operator"`
	Values   []string                  `json:"Values"`
}
