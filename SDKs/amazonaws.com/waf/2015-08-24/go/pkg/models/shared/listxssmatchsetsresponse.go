package shared

// ListXSSMatchSetsResponse
// The response to a <a>ListXssMatchSets</a> request.
type ListXSSMatchSetsResponse struct {
	NextMarker   *string              `json:"NextMarker,omitempty"`
	XSSMatchSets []XSSMatchSetSummary `json:"XssMatchSets,omitempty"`
}
