package shared



type ListPipelineExecutionStepsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    PipelineExecutionArn *string `json:"PipelineExecutionArn,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    
}

