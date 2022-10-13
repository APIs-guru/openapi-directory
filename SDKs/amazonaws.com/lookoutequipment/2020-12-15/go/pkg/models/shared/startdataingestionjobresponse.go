package shared

type StartDataIngestionJobResponse struct {
	JobID  *string                 `json:"JobId"`
	Status *IngestionJobStatusEnum `json:"Status"`
}
