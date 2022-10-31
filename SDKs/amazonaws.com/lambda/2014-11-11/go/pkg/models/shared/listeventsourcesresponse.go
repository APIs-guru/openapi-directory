package shared



type ListEventSourcesResponse struct {
    EventSources []EventSourceConfiguration `json:"EventSources,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

