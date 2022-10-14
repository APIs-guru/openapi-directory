package shared

type ListCallAnalyticsJobsResponse struct {
	CallAnalyticsJobSummaries []CallAnalyticsJobSummary   `json:"CallAnalyticsJobSummaries,omitempty"`
	NextToken                 *string                     `json:"NextToken,omitempty"`
	Status                    *CallAnalyticsJobStatusEnum `json:"Status,omitempty"`
}
