package shared

type StartDataIngestionJobResponse struct {
	JobID  *string                 `json:"JobId,omitempty"`
	Status *IngestionJobStatusEnum `json:"Status,omitempty"`
}
