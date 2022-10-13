package shared

type AwsRdsDbDomainMembership struct {
	Domain      *string `json:"Domain"`
	Fqdn        *string `json:"Fqdn"`
	IamRoleName *string `json:"IamRoleName"`
	Status      *string `json:"Status"`
}
