package shared



type ListEulasResponse struct {
    Eulas []Eula `json:"eulas,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

