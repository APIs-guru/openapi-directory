package shared

// CategoryCount
// Represents the count of a single category within the cluster.
type CategoryCount struct {
	Category *string `json:"category,omitempty"`
	Count    *string `json:"count,omitempty"`
}
