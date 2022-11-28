package shared

// GetConfigurationSetEventDestinationsResponse
// Information about an event destination for a configuration set.
type GetConfigurationSetEventDestinationsResponse struct {
	EventDestinations []EventDestination `json:"EventDestinations,omitempty"`
}
