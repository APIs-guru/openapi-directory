package shared

// PublisherProvidedForecast
// This message carries publisher provided forecasting information.
type PublisherProvidedForecast struct {
	Dimensions        []Dimension `json:"dimensions,omitempty"`
	WeeklyImpressions *string     `json:"weeklyImpressions,omitempty"`
	WeeklyUniques     *string     `json:"weeklyUniques,omitempty"`
}
