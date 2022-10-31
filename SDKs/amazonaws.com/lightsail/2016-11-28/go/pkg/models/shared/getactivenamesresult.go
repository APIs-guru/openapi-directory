package shared



type GetActiveNamesResult struct {
    ActiveNames []string `json:"activeNames,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

