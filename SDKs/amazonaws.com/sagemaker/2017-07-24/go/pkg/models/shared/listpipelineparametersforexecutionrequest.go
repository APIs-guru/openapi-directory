package shared

type ListPipelineParametersForExecutionRequest struct {
	MaxResults           *int64  `json:"MaxResults,omitempty"`
	NextToken            *string `json:"NextToken,omitempty"`
	PipelineExecutionArn string  `json:"PipelineExecutionArn"`
}
