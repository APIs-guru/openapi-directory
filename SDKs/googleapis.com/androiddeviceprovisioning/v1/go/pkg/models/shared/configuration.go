package shared



type Configuration struct {
    CompanyName *string `json:"companyName,omitempty"`
    ConfigurationID *string `json:"configurationId,omitempty"`
    ConfigurationName *string `json:"configurationName,omitempty"`
    ContactEmail *string `json:"contactEmail,omitempty"`
    ContactPhone *string `json:"contactPhone,omitempty"`
    CustomMessage *string `json:"customMessage,omitempty"`
    DpcExtras *string `json:"dpcExtras,omitempty"`
    DpcResourcePath *string `json:"dpcResourcePath,omitempty"`
    IsDefault *bool `json:"isDefault,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

