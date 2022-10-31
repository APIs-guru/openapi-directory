package shared



type GetRelationalDatabaseParametersResult struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Parameters []RelationalDatabaseParameter `json:"parameters,omitempty"`
    
}

