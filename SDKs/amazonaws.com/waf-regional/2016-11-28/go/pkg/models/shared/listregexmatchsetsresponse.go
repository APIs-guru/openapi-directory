package shared

type ListRegexMatchSetsResponse struct {
	NextMarker     *string                `json:"NextMarker,omitempty"`
	RegexMatchSets []RegexMatchSetSummary `json:"RegexMatchSets,omitempty"`
}
