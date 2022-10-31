package shared



type ListClosedWorkflowExecutionsInput struct {
    CloseStatusFilter *CloseStatusFilter `json:"closeStatusFilter,omitempty"`
    CloseTimeFilter *ExecutionTimeFilter `json:"closeTimeFilter,omitempty"`
    Domain string `json:"domain"`
    ExecutionFilter *WorkflowExecutionFilter `json:"executionFilter,omitempty"`
    MaximumPageSize *int64 `json:"maximumPageSize,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ReverseOrder *bool `json:"reverseOrder,omitempty"`
    StartTimeFilter *ExecutionTimeFilter `json:"startTimeFilter,omitempty"`
    TagFilter *TagFilter `json:"tagFilter,omitempty"`
    TypeFilter *WorkflowTypeFilter `json:"typeFilter,omitempty"`
    
}

