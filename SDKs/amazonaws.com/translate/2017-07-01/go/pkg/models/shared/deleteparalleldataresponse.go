package shared

type DeleteParallelDataResponse struct {
	Name   *string                 `json:"Name,omitempty"`
	Status *ParallelDataStatusEnum `json:"Status,omitempty"`
}
