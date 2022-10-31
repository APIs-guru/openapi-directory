package shared



type UpdateServiceActionInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    Definition map[string]string `json:"Definition,omitempty"`
    Description *string `json:"Description,omitempty"`
    ID string `json:"Id"`
    Name *string `json:"Name,omitempty"`
    
}

