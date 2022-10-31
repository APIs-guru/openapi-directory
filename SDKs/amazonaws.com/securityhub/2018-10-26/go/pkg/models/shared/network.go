package shared



type Network struct {
    DestinationDomain *string `json:"DestinationDomain,omitempty"`
    DestinationIPV4 *string `json:"DestinationIpV4,omitempty"`
    DestinationIPV6 *string `json:"DestinationIpV6,omitempty"`
    DestinationPort *int64 `json:"DestinationPort,omitempty"`
    Direction *NetworkDirectionEnum `json:"Direction,omitempty"`
    OpenPortRange *PortRange `json:"OpenPortRange,omitempty"`
    Protocol *string `json:"Protocol,omitempty"`
    SourceDomain *string `json:"SourceDomain,omitempty"`
    SourceIPV4 *string `json:"SourceIpV4,omitempty"`
    SourceIPV6 *string `json:"SourceIpV6,omitempty"`
    SourceMac *string `json:"SourceMac,omitempty"`
    SourcePort *int64 `json:"SourcePort,omitempty"`
    
}

