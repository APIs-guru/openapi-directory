package shared



type ListPrincipalsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Principals []Principal `json:"principals,omitempty"`
    
}

