package shared

type ListEventSourceMappingsResponse struct {
	EventSourceMappings []EventSourceMappingConfiguration `json:"EventSourceMappings"`
	NextMarker          *string                           `json:"NextMarker"`
}
