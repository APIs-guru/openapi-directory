package shared

// InstancePortInfo
// Describes information about ports for an Amazon Lightsail instance.
type InstancePortInfo struct {
	AccessDirection *AccessDirectionEnum `json:"accessDirection,omitempty"`
	AccessFrom      *string              `json:"accessFrom,omitempty"`
	AccessType      *PortAccessTypeEnum  `json:"accessType,omitempty"`
	CidrListAliases []string             `json:"cidrListAliases,omitempty"`
	Cidrs           []string             `json:"cidrs,omitempty"`
	CommonName      *string              `json:"commonName,omitempty"`
	FromPort        *int64               `json:"fromPort,omitempty"`
	Ipv6Cidrs       []string             `json:"ipv6Cidrs,omitempty"`
	Protocol        *NetworkProtocolEnum `json:"protocol,omitempty"`
	ToPort          *int64               `json:"toPort,omitempty"`
}
