package shared

type AwsRdsDbDomainMembership struct {
	Domain      *string `json:"Domain,omitempty"`
	Fqdn        *string `json:"Fqdn,omitempty"`
	IamRoleName *string `json:"IamRoleName,omitempty"`
	Status      *string `json:"Status,omitempty"`
}
