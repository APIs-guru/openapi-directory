package shared

type ComplianceStringFilter struct {
	Key    *string                          `json:"Key"`
	Type   *ComplianceQueryOperatorTypeEnum `json:"Type"`
	Values []string                         `json:"Values"`
}
