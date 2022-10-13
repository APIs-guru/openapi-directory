package shared

type ListStreamingSessionsResponse struct {
	NextToken *string            `json:"nextToken"`
	Sessions  []StreamingSession `json:"sessions"`
}
