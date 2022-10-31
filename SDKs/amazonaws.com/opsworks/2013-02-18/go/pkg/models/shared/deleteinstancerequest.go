package shared



type DeleteInstanceRequest struct {
    DeleteElasticIP *bool `json:"DeleteElasticIp,omitempty"`
    DeleteVolumes *bool `json:"DeleteVolumes,omitempty"`
    InstanceID string `json:"InstanceId"`
    
}

