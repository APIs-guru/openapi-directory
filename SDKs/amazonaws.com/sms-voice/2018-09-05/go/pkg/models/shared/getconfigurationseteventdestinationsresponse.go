package shared

// GetConfigurationSetEventDestinationsResponse
// An object that contains information about an event destination.
type GetConfigurationSetEventDestinationsResponse struct {
	EventDestinations []EventDestination `json:"EventDestinations,omitempty"`
}
