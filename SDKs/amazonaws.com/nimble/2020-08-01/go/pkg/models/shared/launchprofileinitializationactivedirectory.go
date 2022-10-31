package shared



type LaunchProfileInitializationActiveDirectory struct {
    ComputerAttributes []ActiveDirectoryComputerAttribute `json:"computerAttributes,omitempty"`
    DirectoryID *string `json:"directoryId,omitempty"`
    DirectoryName *string `json:"directoryName,omitempty"`
    DNSIPAddresses []string `json:"dnsIpAddresses,omitempty"`
    OrganizationalUnitDistinguishedName *string `json:"organizationalUnitDistinguishedName,omitempty"`
    StudioComponentID *string `json:"studioComponentId,omitempty"`
    StudioComponentName *string `json:"studioComponentName,omitempty"`
    
}

