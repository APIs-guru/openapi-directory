package shared



type ItemResponse struct {
    EndpointItemResponse *EndpointItemResponse `json:"EndpointItemResponse,omitempty"`
    EventsItemResponse map[string]EventItemResponse `json:"EventsItemResponse,omitempty"`
    
}

