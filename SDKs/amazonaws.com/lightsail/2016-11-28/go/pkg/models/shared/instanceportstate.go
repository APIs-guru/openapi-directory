package shared

type InstancePortState struct {
	CidrListAliases []string             `json:"cidrListAliases"`
	Cidrs           []string             `json:"cidrs"`
	FromPort        *int64               `json:"fromPort"`
	Ipv6Cidrs       []string             `json:"ipv6Cidrs"`
	Protocol        *NetworkProtocolEnum `json:"protocol"`
	State           *PortStateEnum       `json:"state"`
	ToPort          *int64               `json:"toPort"`
}
