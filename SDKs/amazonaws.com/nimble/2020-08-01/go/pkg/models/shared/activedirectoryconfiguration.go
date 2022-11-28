package shared

// ActiveDirectoryConfiguration
// The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.
type ActiveDirectoryConfiguration struct {
	ComputerAttributes                  []ActiveDirectoryComputerAttribute `json:"computerAttributes,omitempty"`
	DirectoryID                         *string                            `json:"directoryId,omitempty"`
	OrganizationalUnitDistinguishedName *string                            `json:"organizationalUnitDistinguishedName,omitempty"`
}
