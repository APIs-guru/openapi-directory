package shared

type CreateStreamInput struct {
	ShardCount int64  `json:"ShardCount"`
	StreamName string `json:"StreamName"`
}
