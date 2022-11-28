package shared

// AutoMlCandidateStep
// Information about the steps for a candidate and what step it is working on.
type AutoMlCandidateStep struct {
	CandidateStepArn  string                `json:"CandidateStepArn"`
	CandidateStepName string                `json:"CandidateStepName"`
	CandidateStepType CandidateStepTypeEnum `json:"CandidateStepType"`
}
