package shared

type ListTransformJobsResponse struct {
	NextToken             *string               `json:"NextToken"`
	TransformJobSummaries []TransformJobSummary `json:"TransformJobSummaries"`
}
