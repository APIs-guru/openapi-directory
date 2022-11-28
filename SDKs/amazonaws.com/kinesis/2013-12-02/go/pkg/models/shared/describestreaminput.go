package shared

// DescribeStreamInput
// Represents the input for <code>DescribeStream</code>.
type DescribeStreamInput struct {
	ExclusiveStartShardID *string `json:"ExclusiveStartShardId,omitempty"`
	Limit                 *int64  `json:"Limit,omitempty"`
	StreamName            string  `json:"StreamName"`
}
