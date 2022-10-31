package shared



type ListColumnSpecsResponse struct {
    ColumnSpecs []ColumnSpec `json:"columnSpecs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

