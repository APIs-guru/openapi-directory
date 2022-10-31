package shared

type UpdateShardCountOutput struct {
	CurrentShardCount *int64  `json:"CurrentShardCount,omitempty"`
	StreamName        *string `json:"StreamName,omitempty"`
	TargetShardCount  *int64  `json:"TargetShardCount,omitempty"`
}
