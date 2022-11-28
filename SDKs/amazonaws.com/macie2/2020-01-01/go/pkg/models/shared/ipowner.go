package shared

// IPOwner
// Provides information about the registered owner of an IP address.
type IPOwner struct {
	Asn    *string `json:"asn,omitempty"`
	AsnOrg *string `json:"asnOrg,omitempty"`
	Isp    *string `json:"isp,omitempty"`
	Org    *string `json:"org,omitempty"`
}
