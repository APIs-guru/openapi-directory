package shared

type ScriptStackFrame struct {
	EndColumn   *int32  `json:"endColumn"`
	EndLine     *int32  `json:"endLine"`
	ProcedureID *string `json:"procedureId"`
	StartColumn *int32  `json:"startColumn"`
	StartLine   *int32  `json:"startLine"`
	Text        *string `json:"text"`
}
