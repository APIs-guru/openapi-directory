package shared

// Root
// Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. The root contains every AWS account in the organization.
type Root struct {
	Arn         *string             `json:"Arn,omitempty"`
	ID          *string             `json:"Id,omitempty"`
	Name        *string             `json:"Name,omitempty"`
	PolicyTypes []PolicyTypeSummary `json:"PolicyTypes,omitempty"`
}
