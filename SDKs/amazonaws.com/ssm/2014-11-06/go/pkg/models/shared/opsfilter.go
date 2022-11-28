package shared

// OpsFilter
// A filter for viewing OpsData summaries.
type OpsFilter struct {
	Key    string                     `json:"Key"`
	Type   *OpsFilterOperatorTypeEnum `json:"Type,omitempty"`
	Values []string                   `json:"Values"`
}
