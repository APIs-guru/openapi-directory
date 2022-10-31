package shared



type CountOpenWorkflowExecutionsInput struct {
    Domain string `json:"domain"`
    ExecutionFilter *WorkflowExecutionFilter `json:"executionFilter,omitempty"`
    StartTimeFilter ExecutionTimeFilter `json:"startTimeFilter"`
    TagFilter *TagFilter `json:"tagFilter,omitempty"`
    TypeFilter *WorkflowTypeFilter `json:"typeFilter,omitempty"`
    
}

