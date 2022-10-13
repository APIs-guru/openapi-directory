package shared

type Value struct {
	InterpretedValue string   `json:"interpretedValue"`
	OriginalValue    *string  `json:"originalValue"`
	ResolvedValues   []string `json:"resolvedValues"`
}
