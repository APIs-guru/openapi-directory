package shared

// ActiveDirectoryComputerAttribute
// An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.
type ActiveDirectoryComputerAttribute struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
