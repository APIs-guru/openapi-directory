package shared



type BulkCreateAdRequest struct {
    Requests []CreateAdRequest `json:"requests,omitempty"`
    
}

