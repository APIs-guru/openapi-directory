package shared

type Term struct {
	SourceText *string `json:"SourceText,omitempty"`
	TargetText *string `json:"TargetText,omitempty"`
}
