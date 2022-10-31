package shared

type OrganizationNode struct {
	Type  *OrganizationNodeTypeEnum `json:"Type,omitempty"`
	Value *string                   `json:"Value,omitempty"`
}
