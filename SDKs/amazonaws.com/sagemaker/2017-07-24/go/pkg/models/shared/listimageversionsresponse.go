package shared



type ListImageVersionsResponse struct {
    ImageVersions []ImageVersion `json:"ImageVersions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

