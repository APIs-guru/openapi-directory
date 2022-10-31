package shared



type GetRelationalDatabaseParametersRequest struct {
    PageToken *string `json:"pageToken,omitempty"`
    RelationalDatabaseName string `json:"relationalDatabaseName"`
    
}

