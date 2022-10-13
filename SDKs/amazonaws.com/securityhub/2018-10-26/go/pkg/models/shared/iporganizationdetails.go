package shared

type IPOrganizationDetails struct {
	Asn    *int64  `json:"Asn"`
	AsnOrg *string `json:"AsnOrg"`
	Isp    *string `json:"Isp"`
	Org    *string `json:"Org"`
}
