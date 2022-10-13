package shared

type LaunchProfileInitializationActiveDirectory struct {
	ComputerAttributes                  []ActiveDirectoryComputerAttribute `json:"computerAttributes"`
	DirectoryID                         *string                            `json:"directoryId"`
	DirectoryName                       *string                            `json:"directoryName"`
	DNSIPAddresses                      []string                           `json:"dnsIpAddresses"`
	OrganizationalUnitDistinguishedName *string                            `json:"organizationalUnitDistinguishedName"`
	StudioComponentID                   *string                            `json:"studioComponentId"`
	StudioComponentName                 *string                            `json:"studioComponentName"`
}
