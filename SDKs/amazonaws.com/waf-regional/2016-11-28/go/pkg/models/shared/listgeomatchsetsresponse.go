package shared

type ListGeoMatchSetsResponse struct {
	GeoMatchSets []GeoMatchSetSummary `json:"GeoMatchSets,omitempty"`
	NextMarker   *string              `json:"NextMarker,omitempty"`
}
