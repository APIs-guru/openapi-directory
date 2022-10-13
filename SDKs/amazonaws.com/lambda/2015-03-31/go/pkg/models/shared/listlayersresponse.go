package shared

type ListLayersResponse struct {
	Layers     []LayersListItem `json:"Layers"`
	NextMarker *string          `json:"NextMarker"`
}
