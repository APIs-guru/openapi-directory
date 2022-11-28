package shared

// DescribeStreamInput
// Represents the input of a <code>DescribeStream</code> operation.
type DescribeStreamInput struct {
	ExclusiveStartShardID *string `json:"ExclusiveStartShardId,omitempty"`
	Limit                 *int64  `json:"Limit,omitempty"`
	StreamArn             string  `json:"StreamArn"`
}
