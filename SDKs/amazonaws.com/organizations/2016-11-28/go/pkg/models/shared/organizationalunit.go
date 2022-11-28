package shared

// OrganizationalUnit
// Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.
type OrganizationalUnit struct {
	Arn  *string `json:"Arn,omitempty"`
	ID   *string `json:"Id,omitempty"`
	Name *string `json:"Name,omitempty"`
}
