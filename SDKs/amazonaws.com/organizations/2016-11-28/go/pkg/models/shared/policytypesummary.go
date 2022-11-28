package shared

// PolicyTypeSummary
// Contains information about a policy type and its status in the associated root.
type PolicyTypeSummary struct {
	Status *PolicyTypeStatusEnum `json:"Status,omitempty"`
	Type   *PolicyTypeEnum       `json:"Type,omitempty"`
}
