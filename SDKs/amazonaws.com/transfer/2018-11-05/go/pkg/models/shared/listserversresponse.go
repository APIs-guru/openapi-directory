package shared



type ListServersResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Servers []ListedServer `json:"Servers"`
    
}

