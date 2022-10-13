package shared

type OperationSummary struct {
	ID     *string              `json:"Id"`
	Status *OperationStatusEnum `json:"Status"`
}
