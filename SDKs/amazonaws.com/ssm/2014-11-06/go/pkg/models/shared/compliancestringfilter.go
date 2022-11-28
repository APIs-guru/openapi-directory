package shared

// ComplianceStringFilter
// One or more filters. Use a filter to return a more specific list of results.
type ComplianceStringFilter struct {
	Key    *string                          `json:"Key,omitempty"`
	Type   *ComplianceQueryOperatorTypeEnum `json:"Type,omitempty"`
	Values []string                         `json:"Values,omitempty"`
}
