package shared

type ListPipelineExecutionStepsRequest struct {
	MaxResults           *int64         `json:"MaxResults"`
	NextToken            *string        `json:"NextToken"`
	PipelineExecutionArn *string        `json:"PipelineExecutionArn"`
	SortOrder            *SortOrderEnum `json:"SortOrder"`
}
