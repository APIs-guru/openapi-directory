package shared

type GetLogEventsResponse struct {
	Events            []OutputLogEvent `json:"events"`
	NextBackwardToken *string          `json:"nextBackwardToken"`
	NextForwardToken  *string          `json:"nextForwardToken"`
}
