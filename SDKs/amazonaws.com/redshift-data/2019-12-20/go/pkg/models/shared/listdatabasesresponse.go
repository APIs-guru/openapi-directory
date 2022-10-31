package shared



type ListDatabasesResponse struct {
    Databases []string `json:"Databases,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

