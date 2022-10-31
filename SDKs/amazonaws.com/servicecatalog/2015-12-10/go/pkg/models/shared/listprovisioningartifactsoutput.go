package shared



type ListProvisioningArtifactsOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    ProvisioningArtifactDetails []ProvisioningArtifactDetail `json:"ProvisioningArtifactDetails,omitempty"`
    
}

