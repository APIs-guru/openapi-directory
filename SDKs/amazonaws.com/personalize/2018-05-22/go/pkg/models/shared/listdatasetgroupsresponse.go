package shared



type ListDatasetGroupsResponse struct {
    DatasetGroups []DatasetGroupSummary `json:"datasetGroups,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

