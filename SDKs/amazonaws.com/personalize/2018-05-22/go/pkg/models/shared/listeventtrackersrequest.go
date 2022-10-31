package shared



type ListEventTrackersRequest struct {
    DatasetGroupArn *string `json:"datasetGroupArn,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

