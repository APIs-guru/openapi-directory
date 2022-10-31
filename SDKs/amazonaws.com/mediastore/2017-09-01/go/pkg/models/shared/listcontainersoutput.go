package shared



type ListContainersOutput struct {
    Containers []Container `json:"Containers"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

