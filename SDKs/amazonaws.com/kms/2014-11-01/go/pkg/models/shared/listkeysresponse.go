package shared



type ListKeysResponse struct {
    Keys []KeyListEntry `json:"Keys,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    Truncated *bool `json:"Truncated,omitempty"`
    
}

