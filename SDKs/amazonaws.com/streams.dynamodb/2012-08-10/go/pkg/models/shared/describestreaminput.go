package shared

type DescribeStreamInput struct {
	ExclusiveStartShardID *string `json:"ExclusiveStartShardId"`
	Limit                 *int64  `json:"Limit"`
	StreamArn             string  `json:"StreamArn"`
}
