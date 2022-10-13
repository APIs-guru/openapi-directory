package shared

type ListCallAnalyticsJobsResponse struct {
	CallAnalyticsJobSummaries []CallAnalyticsJobSummary   `json:"CallAnalyticsJobSummaries"`
	NextToken                 *string                     `json:"NextToken"`
	Status                    *CallAnalyticsJobStatusEnum `json:"Status"`
}
