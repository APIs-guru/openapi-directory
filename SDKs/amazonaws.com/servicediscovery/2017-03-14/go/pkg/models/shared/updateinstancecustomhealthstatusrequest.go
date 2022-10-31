package shared



type UpdateInstanceCustomHealthStatusRequest struct {
    InstanceID string `json:"InstanceId"`
    ServiceID string `json:"ServiceId"`
    Status CustomHealthStatusEnum `json:"Status"`
    
}

