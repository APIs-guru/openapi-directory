package shared

type Severity struct {
	Description *SeverityDescriptionEnum `json:"description,omitempty"`
	Score       *int64                   `json:"score,omitempty"`
}
