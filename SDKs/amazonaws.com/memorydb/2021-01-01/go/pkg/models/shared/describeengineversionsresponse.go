package shared



type DescribeEngineVersionsResponse struct {
    EngineVersions []EngineVersionInfo `json:"EngineVersions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

