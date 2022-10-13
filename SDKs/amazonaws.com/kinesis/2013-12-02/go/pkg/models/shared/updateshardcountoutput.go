package shared

type UpdateShardCountOutput struct {
	CurrentShardCount *int64  `json:"CurrentShardCount"`
	StreamName        *string `json:"StreamName"`
	TargetShardCount  *int64  `json:"TargetShardCount"`
}
