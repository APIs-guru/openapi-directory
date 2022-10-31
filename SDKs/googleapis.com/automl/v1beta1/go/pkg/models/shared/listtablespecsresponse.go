package shared



type ListTableSpecsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TableSpecs []TableSpec `json:"tableSpecs,omitempty"`
    
}

