package shared

type OpsItemFilter struct {
	Key      OpsItemFilterKeyEnum      `json:"Key"`
	Operator OpsItemFilterOperatorEnum `json:"Operator"`
	Values   []string                  `json:"Values"`
}
