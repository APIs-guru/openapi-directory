package shared

type OperationSummary struct {
	ID     *string              `json:"Id,omitempty"`
	Status *OperationStatusEnum `json:"Status,omitempty"`
}
