package shared

type ListLayerVersionsResponse struct {
	LayerVersions []LayerVersionsListItem `json:"LayerVersions"`
	NextMarker    *string                 `json:"NextMarker"`
}
