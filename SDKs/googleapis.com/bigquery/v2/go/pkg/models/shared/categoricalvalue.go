package shared

// CategoricalValue
// Representative value of a categorical feature.
type CategoricalValue struct {
	CategoryCounts []CategoryCount `json:"categoryCounts,omitempty"`
}
