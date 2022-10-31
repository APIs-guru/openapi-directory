package shared



type ListDatabasesResponse struct {
    Databases []Database `json:"Databases,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

