package shared

type ListFlowExecutionMessagesRequest struct {
	FlowExecutionID string  `json:"flowExecutionId"`
	MaxResults      *int64  `json:"maxResults"`
	NextToken       *string `json:"nextToken"`
}
