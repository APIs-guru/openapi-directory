package shared

type ActionRemoteIPDetails struct {
	City         *City                  `json:"City"`
	Country      *Country               `json:"Country"`
	GeoLocation  *GeoLocation           `json:"GeoLocation"`
	IPAddressV4  *string                `json:"IpAddressV4"`
	Organization *IPOrganizationDetails `json:"Organization"`
}
