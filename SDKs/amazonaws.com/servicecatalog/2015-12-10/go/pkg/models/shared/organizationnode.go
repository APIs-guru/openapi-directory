package shared

// OrganizationNode
// Information about the organization node.
type OrganizationNode struct {
	Type  *OrganizationNodeTypeEnum `json:"Type,omitempty"`
	Value *string                   `json:"Value,omitempty"`
}
