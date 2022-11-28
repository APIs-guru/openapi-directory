package shared

// GranularStats
// Stats split by a defined in context granularity.
type GranularStats struct {
	Buckets map[string]string `json:"buckets,omitempty"`
}
