package shared

type ListStreamingSessionsResponse struct {
	NextToken *string            `json:"nextToken,omitempty"`
	Sessions  []StreamingSession `json:"sessions,omitempty"`
}
