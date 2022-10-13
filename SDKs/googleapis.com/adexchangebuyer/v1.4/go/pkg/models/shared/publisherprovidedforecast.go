package shared

type PublisherProvidedForecast struct {
	Dimensions        []Dimension `json:"dimensions"`
	WeeklyImpressions *string     `json:"weeklyImpressions"`
	WeeklyUniques     *string     `json:"weeklyUniques"`
}
