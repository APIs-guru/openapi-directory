package shared

type GetFaceSearchResponse struct {
	JobStatus     *VideoJobStatusEnum `json:"JobStatus,omitempty"`
	NextToken     *string             `json:"NextToken,omitempty"`
	Persons       []PersonMatch       `json:"Persons,omitempty"`
	StatusMessage *string             `json:"StatusMessage,omitempty"`
	VideoMetadata *VideoMetadata      `json:"VideoMetadata,omitempty"`
}
