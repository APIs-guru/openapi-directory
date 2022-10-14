package shared

type GetExecutionHistoryInput struct {
	ExecutionArn         string  `json:"executionArn"`
	IncludeExecutionData *bool   `json:"includeExecutionData,omitempty"`
	MaxResults           *int64  `json:"maxResults,omitempty"`
	NextToken            *string `json:"nextToken,omitempty"`
	ReverseOrder         *bool   `json:"reverseOrder,omitempty"`
}
