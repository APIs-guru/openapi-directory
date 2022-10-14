package shared

type PortInfo struct {
	CidrListAliases []string             `json:"cidrListAliases,omitempty"`
	Cidrs           []string             `json:"cidrs,omitempty"`
	FromPort        *int64               `json:"fromPort,omitempty"`
	Ipv6Cidrs       []string             `json:"ipv6Cidrs,omitempty"`
	Protocol        *NetworkProtocolEnum `json:"protocol,omitempty"`
	ToPort          *int64               `json:"toPort,omitempty"`
}
