package shared

type PolicyTypeSummary struct {
	Status *PolicyTypeStatusEnum `json:"Status,omitempty"`
	Type   *PolicyTypeEnum       `json:"Type,omitempty"`
}
