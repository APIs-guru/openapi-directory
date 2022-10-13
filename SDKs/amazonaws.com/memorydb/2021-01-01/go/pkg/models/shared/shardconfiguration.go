package shared

type ShardConfiguration struct {
	ReplicaCount *int64  `json:"ReplicaCount"`
	Slots        *string `json:"Slots"`
}
