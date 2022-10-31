package shared



type IPAddressDetails struct {
    IPAddressV4 *string `json:"ipAddressV4,omitempty"`
    IPCity *IPCity `json:"ipCity,omitempty"`
    IPCountry *IPCountry `json:"ipCountry,omitempty"`
    IPGeoLocation *IPGeoLocation `json:"ipGeoLocation,omitempty"`
    IPOwner *IPOwner `json:"ipOwner,omitempty"`
    
}

