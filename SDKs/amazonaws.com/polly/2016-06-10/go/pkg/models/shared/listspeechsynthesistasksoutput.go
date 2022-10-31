package shared



type ListSpeechSynthesisTasksOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    SynthesisTasks []SynthesisTask `json:"SynthesisTasks,omitempty"`
    
}

