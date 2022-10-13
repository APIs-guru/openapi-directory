package shared

type ListGeoMatchSetsResponse struct {
	GeoMatchSets []GeoMatchSetSummary `json:"GeoMatchSets"`
	NextMarker   *string              `json:"NextMarker"`
}
