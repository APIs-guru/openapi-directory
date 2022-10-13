package shared

type OpsFilter struct {
	Key    string                     `json:"Key"`
	Type   *OpsFilterOperatorTypeEnum `json:"Type"`
	Values []string                   `json:"Values"`
}
