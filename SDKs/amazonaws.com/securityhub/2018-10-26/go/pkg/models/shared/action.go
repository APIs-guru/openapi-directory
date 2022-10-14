package shared

type Action struct {
	ActionType              *string                  `json:"ActionType,omitempty"`
	AwsAPICallAction        *AwsAPICallAction        `json:"AwsApiCallAction,omitempty"`
	DNSRequestAction        *DNSRequestAction        `json:"DnsRequestAction,omitempty"`
	NetworkConnectionAction *NetworkConnectionAction `json:"NetworkConnectionAction,omitempty"`
	PortProbeAction         *PortProbeAction         `json:"PortProbeAction,omitempty"`
}
