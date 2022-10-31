package shared



type ListLabelingJobsResponse struct {
    LabelingJobSummaryList []LabelingJobSummary `json:"LabelingJobSummaryList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

