package shared



type CreateDeploymentRequest struct {
    AppID *string `json:"AppId,omitempty"`
    Command DeploymentCommand `json:"Command"`
    Comment *string `json:"Comment,omitempty"`
    CustomJSON *string `json:"CustomJson,omitempty"`
    InstanceIds []string `json:"InstanceIds,omitempty"`
    LayerIds []string `json:"LayerIds,omitempty"`
    StackID string `json:"StackId"`
    
}

