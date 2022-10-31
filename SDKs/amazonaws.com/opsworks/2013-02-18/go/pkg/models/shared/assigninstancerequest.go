package shared



type AssignInstanceRequest struct {
    InstanceID string `json:"InstanceId"`
    LayerIds []string `json:"LayerIds"`
    
}

