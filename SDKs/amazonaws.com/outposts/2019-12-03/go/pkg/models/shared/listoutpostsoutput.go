package shared



type ListOutpostsOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    Outposts []Outpost `json:"Outposts,omitempty"`
    
}

