package shared

// TrackCountryAvailability
// Resource for per-track country availability information.
type TrackCountryAvailability struct {
	Countries          []TrackTargetedCountry `json:"countries,omitempty"`
	RestOfWorld        *bool                  `json:"restOfWorld,omitempty"`
	SyncWithProduction *bool                  `json:"syncWithProduction,omitempty"`
}
