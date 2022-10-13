package shared

type ListTranscriptionJobsResponse struct {
	NextToken                 *string                     `json:"NextToken"`
	Status                    *TranscriptionJobStatusEnum `json:"Status"`
	TranscriptionJobSummaries []TranscriptionJobSummary   `json:"TranscriptionJobSummaries"`
}
