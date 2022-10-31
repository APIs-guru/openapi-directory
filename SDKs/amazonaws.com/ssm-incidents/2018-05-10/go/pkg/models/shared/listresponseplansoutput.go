package shared

type ListResponsePlansOutput struct {
	NextToken             *string               `json:"nextToken,omitempty"`
	ResponsePlanSummaries []ResponsePlanSummary `json:"responsePlanSummaries"`
}
