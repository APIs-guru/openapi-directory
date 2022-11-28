package shared

// ShardConfiguration
// Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.
type ShardConfiguration struct {
	ReplicaCount *int64  `json:"ReplicaCount,omitempty"`
	Slots        *string `json:"Slots,omitempty"`
}
