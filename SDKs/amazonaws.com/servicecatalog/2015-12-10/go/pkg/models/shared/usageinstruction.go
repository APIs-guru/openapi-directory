package shared

// UsageInstruction
// Additional information provided by the administrator.
type UsageInstruction struct {
	Type  *string `json:"Type,omitempty"`
	Value *string `json:"Value,omitempty"`
}
