package shared



type ListResourceTagsResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Truncated *bool `json:"Truncated,omitempty"`
    
}

