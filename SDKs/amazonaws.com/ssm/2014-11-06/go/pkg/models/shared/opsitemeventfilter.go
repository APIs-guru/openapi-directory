package shared

// OpsItemEventFilter
// Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping.
type OpsItemEventFilter struct {
	Key      OpsItemEventFilterKeyEnum      `json:"Key"`
	Operator OpsItemEventFilterOperatorEnum `json:"Operator"`
	Values   []string                       `json:"Values"`
}
