package shared

// ItemResponse
// Provides information about the results of a request to create or update an endpoint that's associated with an event.
type ItemResponse struct {
	EndpointItemResponse *EndpointItemResponse        `json:"EndpointItemResponse,omitempty"`
	EventsItemResponse   map[string]EventItemResponse `json:"EventsItemResponse,omitempty"`
}
