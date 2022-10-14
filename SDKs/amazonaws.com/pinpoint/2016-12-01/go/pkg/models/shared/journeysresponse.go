package shared

type JourneysResponse struct {
	Item      []JourneyResponse `json:"Item"`
	NextToken *string           `json:"NextToken,omitempty"`
}
