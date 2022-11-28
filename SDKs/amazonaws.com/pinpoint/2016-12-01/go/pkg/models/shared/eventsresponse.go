package shared

// EventsResponse
// Provides information about endpoints and the events that they're associated with.
type EventsResponse struct {
	Results map[string]ItemResponse `json:"Results,omitempty"`
}
