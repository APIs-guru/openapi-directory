package shared

// ReplicaConfigurationRequest
// A request to configure the number of replicas in a shard
type ReplicaConfigurationRequest struct {
	ReplicaCount *int64 `json:"ReplicaCount,omitempty"`
}
