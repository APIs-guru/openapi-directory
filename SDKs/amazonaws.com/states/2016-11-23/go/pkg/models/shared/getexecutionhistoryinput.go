package shared

type GetExecutionHistoryInput struct {
	ExecutionArn         string  `json:"executionArn"`
	IncludeExecutionData *bool   `json:"includeExecutionData"`
	MaxResults           *int64  `json:"maxResults"`
	NextToken            *string `json:"nextToken"`
	ReverseOrder         *bool   `json:"reverseOrder"`
}
