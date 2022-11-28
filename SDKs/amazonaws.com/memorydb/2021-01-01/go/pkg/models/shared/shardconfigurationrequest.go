package shared

// ShardConfigurationRequest
// A request to configure the sharding properties of a cluster
type ShardConfigurationRequest struct {
	ShardCount *int64 `json:"ShardCount,omitempty"`
}
