package shared

type ListFlowExecutionMessagesRequest struct {
	FlowExecutionID string  `json:"flowExecutionId"`
	MaxResults      *int64  `json:"maxResults,omitempty"`
	NextToken       *string `json:"nextToken,omitempty"`
}
