package shared

type OpsFilter struct {
	Key    string                     `json:"Key"`
	Type   *OpsFilterOperatorTypeEnum `json:"Type,omitempty"`
	Values []string                   `json:"Values"`
}
