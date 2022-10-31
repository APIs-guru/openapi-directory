package shared



type DescribeExecutionResponse struct {
    Execution DescribedExecution `json:"Execution"`
    WorkflowID string `json:"WorkflowId"`
    
}

