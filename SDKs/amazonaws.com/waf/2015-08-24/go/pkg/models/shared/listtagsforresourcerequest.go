package shared



type ListTagsForResourceRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    ResourceArn string `json:"ResourceARN"`
    
}

