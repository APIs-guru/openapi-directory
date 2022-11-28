package shared

// ResultRowValue
// Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.
type ResultRowValue struct {
	Key   string `json:"Key"`
	Type  string `json:"Type"`
	Value string `json:"Value"`
}
