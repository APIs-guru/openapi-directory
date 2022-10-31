package shared



type ListEventSourceMappingsResponse struct {
    EventSourceMappings []EventSourceMappingConfiguration `json:"EventSourceMappings,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

