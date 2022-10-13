package shared

type ListRegexMatchSetsResponse struct {
	NextMarker     *string                `json:"NextMarker"`
	RegexMatchSets []RegexMatchSetSummary `json:"RegexMatchSets"`
}
