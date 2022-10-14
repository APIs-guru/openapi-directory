package shared

type GetExecutionHistoryOutput struct {
	Events    []HistoryEvent `json:"events"`
	NextToken *string        `json:"nextToken,omitempty"`
}
