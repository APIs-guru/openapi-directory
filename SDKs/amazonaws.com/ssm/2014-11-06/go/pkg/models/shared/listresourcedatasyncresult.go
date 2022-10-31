package shared



type ListResourceDataSyncResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    ResourceDataSyncItems []ResourceDataSyncItem `json:"ResourceDataSyncItems,omitempty"`
    
}

