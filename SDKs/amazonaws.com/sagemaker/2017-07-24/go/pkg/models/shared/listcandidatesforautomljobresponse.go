package shared

type ListCandidatesForAutoMlJobResponse struct {
	Candidates []AutoMlCandidate `json:"Candidates"`
	NextToken  *string           `json:"NextToken"`
}
