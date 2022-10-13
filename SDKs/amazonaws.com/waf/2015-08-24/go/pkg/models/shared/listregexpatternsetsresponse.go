package shared

type ListRegexPatternSetsResponse struct {
	NextMarker       *string                  `json:"NextMarker"`
	RegexPatternSets []RegexPatternSetSummary `json:"RegexPatternSets"`
}
