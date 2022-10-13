package shared

type ListCallAnalyticsJobsRequest struct {
	JobNameContains *string                     `json:"JobNameContains"`
	MaxResults      *int64                      `json:"MaxResults"`
	NextToken       *string                     `json:"NextToken"`
	Status          *CallAnalyticsJobStatusEnum `json:"Status"`
}
