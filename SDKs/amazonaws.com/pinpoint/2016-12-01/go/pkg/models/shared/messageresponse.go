package shared



type MessageResponse struct {
    ApplicationID string `json:"ApplicationId"`
    EndpointResult map[string]EndpointMessageResult `json:"EndpointResult,omitempty"`
    RequestID *string `json:"RequestId,omitempty"`
    Result map[string]MessageResult `json:"Result,omitempty"`
    
}

