package shared

type ListLayerVersionsResponse struct {
	LayerVersions []LayerVersionsListItem `json:"LayerVersions,omitempty"`
	NextMarker    *string                 `json:"NextMarker,omitempty"`
}
