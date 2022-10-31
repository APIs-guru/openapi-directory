package shared

type ListLayersResponse struct {
	Layers     []LayersListItem `json:"Layers,omitempty"`
	NextMarker *string          `json:"NextMarker,omitempty"`
}
