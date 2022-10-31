package shared



type ListResourceDelegatesResponse struct {
    Delegates []Delegate `json:"Delegates,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

