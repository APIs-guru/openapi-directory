package shared

type GetFaceSearchResponse struct {
	JobStatus     *VideoJobStatusEnum `json:"JobStatus"`
	NextToken     *string             `json:"NextToken"`
	Persons       []PersonMatch       `json:"Persons"`
	StatusMessage *string             `json:"StatusMessage"`
	VideoMetadata *VideoMetadata      `json:"VideoMetadata"`
}
