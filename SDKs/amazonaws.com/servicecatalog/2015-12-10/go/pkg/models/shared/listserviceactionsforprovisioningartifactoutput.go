package shared



type ListServiceActionsForProvisioningArtifactOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    ServiceActionSummaries []ServiceActionSummary `json:"ServiceActionSummaries,omitempty"`
    
}

