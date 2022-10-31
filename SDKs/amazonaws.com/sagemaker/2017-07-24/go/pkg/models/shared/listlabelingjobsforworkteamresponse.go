package shared



type ListLabelingJobsForWorkteamResponse struct {
    LabelingJobSummaryList []LabelingJobForWorkteamSummary `json:"LabelingJobSummaryList"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

