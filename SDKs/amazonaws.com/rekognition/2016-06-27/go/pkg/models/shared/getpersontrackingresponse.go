package shared

type GetPersonTrackingResponse struct {
	JobStatus     *VideoJobStatusEnum `json:"JobStatus"`
	NextToken     *string             `json:"NextToken"`
	Persons       []PersonDetection   `json:"Persons"`
	StatusMessage *string             `json:"StatusMessage"`
	VideoMetadata *VideoMetadata      `json:"VideoMetadata"`
}
