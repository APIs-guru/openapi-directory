package shared

type ListPipelineParametersForExecutionRequest struct {
	MaxResults           *int64  `json:"MaxResults"`
	NextToken            *string `json:"NextToken"`
	PipelineExecutionArn string  `json:"PipelineExecutionArn"`
}
