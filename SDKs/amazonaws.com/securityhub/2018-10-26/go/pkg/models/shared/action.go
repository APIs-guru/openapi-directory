package shared

type Action struct {
	ActionType              *string                  `json:"ActionType"`
	AwsAPICallAction        *AwsAPICallAction        `json:"AwsApiCallAction"`
	DNSRequestAction        *DNSRequestAction        `json:"DnsRequestAction"`
	NetworkConnectionAction *NetworkConnectionAction `json:"NetworkConnectionAction"`
	PortProbeAction         *PortProbeAction         `json:"PortProbeAction"`
}
