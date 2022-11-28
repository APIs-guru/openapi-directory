package shared

// AwsRdsDbDomainMembership
// Information about an Active Directory domain membership record associated with the DB instance.
type AwsRdsDbDomainMembership struct {
	Domain      *string `json:"Domain,omitempty"`
	Fqdn        *string `json:"Fqdn,omitempty"`
	IamRoleName *string `json:"IamRoleName,omitempty"`
	Status      *string `json:"Status,omitempty"`
}
