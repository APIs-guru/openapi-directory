package shared

type ListMedicalTranscriptionJobsResponse struct {
	MedicalTranscriptionJobSummaries []MedicalTranscriptionJobSummary `json:"MedicalTranscriptionJobSummaries"`
	NextToken                        *string                          `json:"NextToken"`
	Status                           *TranscriptionJobStatusEnum      `json:"Status"`
}
