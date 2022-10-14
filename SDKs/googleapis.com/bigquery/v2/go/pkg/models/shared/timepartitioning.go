package shared

type TimePartitioning struct {
	ExpirationMs           *string `json:"expirationMs,omitempty"`
	Field                  *string `json:"field,omitempty"`
	RequirePartitionFilter *bool   `json:"requirePartitionFilter,omitempty"`
	Type                   *string `json:"type,omitempty"`
}
