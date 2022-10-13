package shared

type ListXSSMatchSetsResponse struct {
	NextMarker   *string              `json:"NextMarker"`
	XSSMatchSets []XSSMatchSetSummary `json:"XssMatchSets"`
}
