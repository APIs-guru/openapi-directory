package shared

type ListEventTrackersResponse struct {
	EventTrackers []EventTrackerSummary `json:"eventTrackers"`
	NextToken     *string               `json:"nextToken"`
}
