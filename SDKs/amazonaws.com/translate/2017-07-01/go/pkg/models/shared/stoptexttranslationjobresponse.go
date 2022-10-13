package shared

type StopTextTranslationJobResponse struct {
	JobID     *string        `json:"JobId"`
	JobStatus *JobStatusEnum `json:"JobStatus"`
}
