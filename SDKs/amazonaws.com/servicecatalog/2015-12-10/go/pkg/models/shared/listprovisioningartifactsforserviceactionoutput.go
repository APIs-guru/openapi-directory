package shared



type ListProvisioningArtifactsForServiceActionOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    ProvisioningArtifactViews []ProvisioningArtifactView `json:"ProvisioningArtifactViews,omitempty"`
    
}

