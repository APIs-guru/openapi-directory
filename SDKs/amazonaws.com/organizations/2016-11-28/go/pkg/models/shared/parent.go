package shared

// Parent
// Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.
type Parent struct {
	ID   *string         `json:"Id,omitempty"`
	Type *ParentTypeEnum `json:"Type,omitempty"`
}
