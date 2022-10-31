package shared



type Instance struct {
    Attributes map[string]string `json:"Attributes,omitempty"`
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    ID string `json:"Id"`
    
}

