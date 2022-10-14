package shared

type ActionRemoteIPDetails struct {
	City         *City                  `json:"City,omitempty"`
	Country      *Country               `json:"Country,omitempty"`
	GeoLocation  *GeoLocation           `json:"GeoLocation,omitempty"`
	IPAddressV4  *string                `json:"IpAddressV4,omitempty"`
	Organization *IPOrganizationDetails `json:"Organization,omitempty"`
}
