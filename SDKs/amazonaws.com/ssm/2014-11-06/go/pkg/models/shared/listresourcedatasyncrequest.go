package shared



type ListResourceDataSyncRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SyncType *string `json:"SyncType,omitempty"`
    
}

