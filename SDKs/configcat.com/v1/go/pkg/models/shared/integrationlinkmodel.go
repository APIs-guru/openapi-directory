package shared



type IntegrationLinkModel struct {
    Description *string `json:"description,omitempty"`
    IntegrationLinkType *IntegrationLinkTypeEnum `json:"integrationLinkType,omitempty"`
    Key *string `json:"key,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

