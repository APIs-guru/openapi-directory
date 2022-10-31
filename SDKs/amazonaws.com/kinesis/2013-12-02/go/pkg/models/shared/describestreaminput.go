package shared



type DescribeStreamInput struct {
    ExclusiveStartShardID *string `json:"ExclusiveStartShardId,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    StreamName string `json:"StreamName"`
    
}

