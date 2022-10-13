package shared

type ListFlowExecutionMessagesResponse struct {
	Messages  []FlowExecutionMessage `json:"messages"`
	NextToken *string                `json:"nextToken"`
}
