package shared



type RegisterInstanceRequest struct {
    Attributes map[string]string `json:"Attributes"`
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    InstanceID string `json:"InstanceId"`
    ServiceID string `json:"ServiceId"`
    
}

