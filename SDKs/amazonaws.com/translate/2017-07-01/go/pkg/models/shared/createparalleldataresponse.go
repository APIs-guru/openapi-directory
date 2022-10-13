package shared

type CreateParallelDataResponse struct {
	Name   *string                 `json:"Name"`
	Status *ParallelDataStatusEnum `json:"Status"`
}
