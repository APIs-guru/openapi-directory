package shared

type TrackCountryAvailability struct {
	Countries          []TrackTargetedCountry `json:"countries"`
	RestOfWorld        *bool                  `json:"restOfWorld"`
	SyncWithProduction *bool                  `json:"syncWithProduction"`
}
