package shared

// DomainMembership
// An Active Directory Domain membership record associated with a DB instance.
type DomainMembership struct {
	Domain      *string
	Fqdn        *string
	IamRoleName *string
	Status      *string
}
