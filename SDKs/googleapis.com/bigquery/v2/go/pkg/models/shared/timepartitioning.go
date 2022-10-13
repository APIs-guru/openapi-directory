package shared

type TimePartitioning struct {
	ExpirationMs           *string `json:"expirationMs"`
	Field                  *string `json:"field"`
	RequirePartitionFilter *bool   `json:"requirePartitionFilter"`
	Type                   *string `json:"type"`
}
