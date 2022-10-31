package shared

type GetCelebrityRecognitionResponse struct {
	Celebrities   []CelebrityRecognition `json:"Celebrities,omitempty"`
	JobStatus     *VideoJobStatusEnum    `json:"JobStatus,omitempty"`
	NextToken     *string                `json:"NextToken,omitempty"`
	StatusMessage *string                `json:"StatusMessage,omitempty"`
	VideoMetadata *VideoMetadata         `json:"VideoMetadata,omitempty"`
}
