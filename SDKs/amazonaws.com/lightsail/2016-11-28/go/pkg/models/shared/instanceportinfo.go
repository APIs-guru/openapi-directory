package shared

type InstancePortInfo struct {
	AccessDirection *AccessDirectionEnum `json:"accessDirection"`
	AccessFrom      *string              `json:"accessFrom"`
	AccessType      *PortAccessTypeEnum  `json:"accessType"`
	CidrListAliases []string             `json:"cidrListAliases"`
	Cidrs           []string             `json:"cidrs"`
	CommonName      *string              `json:"commonName"`
	FromPort        *int64               `json:"fromPort"`
	Ipv6Cidrs       []string             `json:"ipv6Cidrs"`
	Protocol        *NetworkProtocolEnum `json:"protocol"`
	ToPort          *int64               `json:"toPort"`
}
