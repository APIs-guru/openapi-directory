package shared



type ScriptStackFrame struct {
    EndColumn *int32 `json:"endColumn,omitempty"`
    EndLine *int32 `json:"endLine,omitempty"`
    ProcedureID *string `json:"procedureId,omitempty"`
    StartColumn *int32 `json:"startColumn,omitempty"`
    StartLine *int32 `json:"startLine,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

