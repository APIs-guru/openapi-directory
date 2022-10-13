package shared

type ListEventSourcesResponse struct {
	EventSources []EventSourceConfiguration `json:"EventSources"`
	NextMarker   *string                    `json:"NextMarker"`
}
