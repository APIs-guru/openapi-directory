package shared



type ScriptStatistics struct {
    EvaluationKind *string `json:"evaluationKind,omitempty"`
    StackFrames []ScriptStackFrame `json:"stackFrames,omitempty"`
    
}

