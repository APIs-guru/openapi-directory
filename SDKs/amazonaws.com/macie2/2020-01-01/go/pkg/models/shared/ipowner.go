package shared

type IPOwner struct {
	Asn    *string `json:"asn"`
	AsnOrg *string `json:"asnOrg"`
	Isp    *string `json:"isp"`
	Org    *string `json:"org"`
}
