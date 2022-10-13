package shared

type StartTextTranslationJobResponse struct {
	JobID     *string        `json:"JobId"`
	JobStatus *JobStatusEnum `json:"JobStatus"`
}
