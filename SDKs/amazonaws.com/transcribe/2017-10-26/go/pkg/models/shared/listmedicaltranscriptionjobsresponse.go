package shared

type ListMedicalTranscriptionJobsResponse struct {
	MedicalTranscriptionJobSummaries []MedicalTranscriptionJobSummary `json:"MedicalTranscriptionJobSummaries,omitempty"`
	NextToken                        *string                          `json:"NextToken,omitempty"`
	Status                           *TranscriptionJobStatusEnum      `json:"Status,omitempty"`
}
