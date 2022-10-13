package shared

type Network struct {
	DestinationDomain *string               `json:"DestinationDomain"`
	DestinationIPV4   *string               `json:"DestinationIpV4"`
	DestinationIPV6   *string               `json:"DestinationIpV6"`
	DestinationPort   *int64                `json:"DestinationPort"`
	Direction         *NetworkDirectionEnum `json:"Direction"`
	OpenPortRange     *PortRange            `json:"OpenPortRange"`
	Protocol          *string               `json:"Protocol"`
	SourceDomain      *string               `json:"SourceDomain"`
	SourceIPV4        *string               `json:"SourceIpV4"`
	SourceIPV6        *string               `json:"SourceIpV6"`
	SourceMac         *string               `json:"SourceMac"`
	SourcePort        *int64                `json:"SourcePort"`
}
