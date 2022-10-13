package shared

type ScriptStatistics struct {
	EvaluationKind *string            `json:"evaluationKind"`
	StackFrames    []ScriptStackFrame `json:"stackFrames"`
}
