package shared

type DeleteParallelDataResponse struct {
	Name   *string                 `json:"Name"`
	Status *ParallelDataStatusEnum `json:"Status"`
}
