package shared



type ListArtifactsResponse struct {
    ArtifactSummaries []ArtifactSummary `json:"ArtifactSummaries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

