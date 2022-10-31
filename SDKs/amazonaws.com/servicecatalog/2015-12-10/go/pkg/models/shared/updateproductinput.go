package shared



type UpdateProductInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    AddTags []Tag `json:"AddTags,omitempty"`
    Description *string `json:"Description,omitempty"`
    Distributor *string `json:"Distributor,omitempty"`
    ID string `json:"Id"`
    Name *string `json:"Name,omitempty"`
    Owner *string `json:"Owner,omitempty"`
    RemoveTags []string `json:"RemoveTags,omitempty"`
    SupportDescription *string `json:"SupportDescription,omitempty"`
    SupportEmail *string `json:"SupportEmail,omitempty"`
    SupportURL *string `json:"SupportUrl,omitempty"`
    
}

