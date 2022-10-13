package shared

type ListResponsePlansOutput struct {
	NextToken             *string               `json:"nextToken"`
	ResponsePlanSummaries []ResponsePlanSummary `json:"responsePlanSummaries"`
}
