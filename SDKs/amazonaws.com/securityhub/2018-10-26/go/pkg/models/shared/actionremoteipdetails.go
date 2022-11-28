package shared

// ActionRemoteIPDetails
// For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action.
type ActionRemoteIPDetails struct {
	City         *City                  `json:"City,omitempty"`
	Country      *Country               `json:"Country,omitempty"`
	GeoLocation  *GeoLocation           `json:"GeoLocation,omitempty"`
	IPAddressV4  *string                `json:"IpAddressV4,omitempty"`
	Organization *IPOrganizationDetails `json:"Organization,omitempty"`
}
