package shared

type ActiveDirectoryConfiguration struct {
	ComputerAttributes                  []ActiveDirectoryComputerAttribute `json:"computerAttributes"`
	DirectoryID                         *string                            `json:"directoryId"`
	OrganizationalUnitDistinguishedName *string                            `json:"organizationalUnitDistinguishedName"`
}
