package shared



type PublicDNSNamespaceChange struct {
    Description *string `json:"Description,omitempty"`
    Properties *PublicDNSNamespacePropertiesChange `json:"Properties,omitempty"`
    
}

