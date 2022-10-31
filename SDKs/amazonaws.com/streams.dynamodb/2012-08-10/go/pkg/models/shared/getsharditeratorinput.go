package shared

type GetShardIteratorInput struct {
	SequenceNumber    *string               `json:"SequenceNumber,omitempty"`
	ShardID           string                `json:"ShardId"`
	ShardIteratorType ShardIteratorTypeEnum `json:"ShardIteratorType"`
	StreamArn         string                `json:"StreamArn"`
}
