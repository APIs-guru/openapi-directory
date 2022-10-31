package shared



type SearchParametersResponse struct {
    Example string `json:"example"`
    Label string `json:"label"`
    Paramname string `json:"paramname"`
    Valuelist *interface{} `json:"valuelist,omitempty"`
    
}

