package shared

type ListLabelingJobsResponse struct {
	LabelingJobSummaryList []LabelingJobSummary `json:"LabelingJobSummaryList"`
	NextToken              *string              `json:"NextToken"`
}
