package shared



type ListInventoryEntriesResult struct {
    CaptureTime *string `json:"CaptureTime,omitempty"`
    Entries []map[string]string `json:"Entries,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SchemaVersion *string `json:"SchemaVersion,omitempty"`
    TypeName *string `json:"TypeName,omitempty"`
    
}

