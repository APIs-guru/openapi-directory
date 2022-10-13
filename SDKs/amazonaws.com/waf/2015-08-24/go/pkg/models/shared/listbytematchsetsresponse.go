package shared

type ListByteMatchSetsResponse struct {
	ByteMatchSets []ByteMatchSetSummary `json:"ByteMatchSets"`
	NextMarker    *string               `json:"NextMarker"`
}
