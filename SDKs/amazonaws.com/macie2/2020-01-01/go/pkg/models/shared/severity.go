package shared

type Severity struct {
	Description *SeverityDescriptionEnum `json:"description"`
	Score       *int64                   `json:"score"`
}
