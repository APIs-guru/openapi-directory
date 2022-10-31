package shared



type ApplicationResponse struct {
    Arn string `json:"Arn"`
    ID string `json:"Id"`
    Name string `json:"Name"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

