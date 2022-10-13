package shared

type PolicyTypeSummary struct {
	Status *PolicyTypeStatusEnum `json:"Status"`
	Type   *PolicyTypeEnum       `json:"Type"`
}
