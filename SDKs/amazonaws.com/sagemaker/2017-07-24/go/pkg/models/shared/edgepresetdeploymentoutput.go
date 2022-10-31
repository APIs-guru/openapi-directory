package shared



type EdgePresetDeploymentOutput struct {
    Artifact *string `json:"Artifact,omitempty"`
    Status *EdgePresetDeploymentStatusEnum `json:"Status,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    Type EdgePresetDeploymentTypeEnum `json:"Type"`
    
}

