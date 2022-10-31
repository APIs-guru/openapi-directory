package shared



type OsImage struct {
    ApplicableInstanceTypes []string `json:"applicableInstanceTypes,omitempty"`
    Code *string `json:"code,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    SupportedNetworkTemplates []ServerNetworkTemplate `json:"supportedNetworkTemplates,omitempty"`
    
}

