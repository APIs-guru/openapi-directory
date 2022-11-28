package shared

// Action
// <p>Provides details about one of the following actions that affects or that was taken on a resource:</p> <ul> <li> <p>A remote IP address issued an Amazon Web Services API call</p> </li> <li> <p>A DNS request was received</p> </li> <li> <p>A remote IP address attempted to connect to an EC2 instance</p> </li> <li> <p>A remote IP address attempted a port probe on an EC2 instance</p> </li> </ul>
type Action struct {
	ActionType              *string                  `json:"ActionType,omitempty"`
	AwsAPICallAction        *AwsAPICallAction        `json:"AwsApiCallAction,omitempty"`
	DNSRequestAction        *DNSRequestAction        `json:"DnsRequestAction,omitempty"`
	NetworkConnectionAction *NetworkConnectionAction `json:"NetworkConnectionAction,omitempty"`
	PortProbeAction         *PortProbeAction         `json:"PortProbeAction,omitempty"`
}
