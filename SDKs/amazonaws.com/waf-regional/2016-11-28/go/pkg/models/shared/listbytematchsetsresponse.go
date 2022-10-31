package shared

type ListByteMatchSetsResponse struct {
	ByteMatchSets []ByteMatchSetSummary `json:"ByteMatchSets,omitempty"`
	NextMarker    *string               `json:"NextMarker,omitempty"`
}
