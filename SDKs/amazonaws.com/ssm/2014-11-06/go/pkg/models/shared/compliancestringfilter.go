package shared

type ComplianceStringFilter struct {
	Key    *string                          `json:"Key,omitempty"`
	Type   *ComplianceQueryOperatorTypeEnum `json:"Type,omitempty"`
	Values []string                         `json:"Values,omitempty"`
}
