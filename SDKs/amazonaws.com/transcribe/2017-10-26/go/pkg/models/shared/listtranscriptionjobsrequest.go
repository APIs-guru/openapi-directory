package shared

type ListTranscriptionJobsRequest struct {
	JobNameContains *string                     `json:"JobNameContains"`
	MaxResults      *int64                      `json:"MaxResults"`
	NextToken       *string                     `json:"NextToken"`
	Status          *TranscriptionJobStatusEnum `json:"Status"`
}
