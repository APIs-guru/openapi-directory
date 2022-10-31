package shared



type IPOrganizationDetails struct {
    Asn *int64 `json:"Asn,omitempty"`
    AsnOrg *string `json:"AsnOrg,omitempty"`
    Isp *string `json:"Isp,omitempty"`
    Org *string `json:"Org,omitempty"`
    
}

