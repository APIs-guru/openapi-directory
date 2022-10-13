package shared

type ListSpeechSynthesisTasksOutput struct {
	NextToken      *string         `json:"NextToken"`
	SynthesisTasks []SynthesisTask `json:"SynthesisTasks"`
}
