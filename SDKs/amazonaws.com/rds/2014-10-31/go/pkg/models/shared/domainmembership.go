package shared

// DomainMembership
// An Active Directory Domain membership record associated with the DB instance or cluster.
type DomainMembership struct {
	Domain      *string
	Fqdn        *string
	IamRoleName *string
	Status      *string
}
