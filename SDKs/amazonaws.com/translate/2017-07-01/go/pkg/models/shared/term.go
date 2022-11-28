package shared

// Term
// The term being translated by the custom terminology.
type Term struct {
	SourceText *string `json:"SourceText,omitempty"`
	TargetText *string `json:"TargetText,omitempty"`
}
