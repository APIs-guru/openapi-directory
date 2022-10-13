package shared

type IPAddressDetails struct {
	IPAddressV4   *string        `json:"ipAddressV4"`
	IPCity        *IPCity        `json:"ipCity"`
	IPCountry     *IPCountry     `json:"ipCountry"`
	IPGeoLocation *IPGeoLocation `json:"ipGeoLocation"`
	IPOwner       *IPOwner       `json:"ipOwner"`
}
