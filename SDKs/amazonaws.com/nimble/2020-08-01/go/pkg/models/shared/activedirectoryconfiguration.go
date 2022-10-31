package shared

type ActiveDirectoryConfiguration struct {
	ComputerAttributes                  []ActiveDirectoryComputerAttribute `json:"computerAttributes,omitempty"`
	DirectoryID                         *string                            `json:"directoryId,omitempty"`
	OrganizationalUnitDistinguishedName *string                            `json:"organizationalUnitDistinguishedName,omitempty"`
}
