package shared



type GetRecordsInput struct {
    Limit *int64 `json:"Limit,omitempty"`
    ShardIterator string `json:"ShardIterator"`
    
}

