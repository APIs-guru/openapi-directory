package shared

type GetCelebrityRecognitionResponse struct {
	Celebrities   []CelebrityRecognition `json:"Celebrities"`
	JobStatus     *VideoJobStatusEnum    `json:"JobStatus"`
	NextToken     *string                `json:"NextToken"`
	StatusMessage *string                `json:"StatusMessage"`
	VideoMetadata *VideoMetadata         `json:"VideoMetadata"`
}
