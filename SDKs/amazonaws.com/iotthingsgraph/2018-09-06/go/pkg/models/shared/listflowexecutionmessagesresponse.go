package shared



type ListFlowExecutionMessagesResponse struct {
    Messages []FlowExecutionMessage `json:"messages,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

