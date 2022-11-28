package shared

// GroupCount
// Provides a group of results for a query that retrieved aggregated statistical data about findings.
type GroupCount struct {
	Count    *int64  `json:"count,omitempty"`
	GroupKey *string `json:"groupKey,omitempty"`
}
