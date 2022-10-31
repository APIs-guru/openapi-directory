package shared



type ListTagsForStreamInput struct {
    ExclusiveStartTagKey *string `json:"ExclusiveStartTagKey,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    StreamName string `json:"StreamName"`
    
}

