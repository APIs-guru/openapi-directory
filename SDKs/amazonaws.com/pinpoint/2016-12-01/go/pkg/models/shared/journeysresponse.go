package shared

// JourneysResponse
// Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
type JourneysResponse struct {
	Item      []JourneyResponse `json:"Item"`
	NextToken *string           `json:"NextToken,omitempty"`
}
