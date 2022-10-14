package shared

type ShardConfiguration struct {
	ReplicaCount *int64  `json:"ReplicaCount,omitempty"`
	Slots        *string `json:"Slots,omitempty"`
}
