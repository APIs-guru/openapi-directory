package shared



type SearchEntitiesResponse struct {
    Descriptions []EntityDescription `json:"descriptions,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

