package shared

type AutoMlCandidateStep struct {
	CandidateStepArn  string                `json:"CandidateStepArn"`
	CandidateStepName string                `json:"CandidateStepName"`
	CandidateStepType CandidateStepTypeEnum `json:"CandidateStepType"`
}
