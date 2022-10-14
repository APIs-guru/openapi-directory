package shared

type ListTrainingJobsForHyperParameterTuningJobRequest struct {
	HyperParameterTuningJobName string                        `json:"HyperParameterTuningJobName"`
	MaxResults                  *int64                        `json:"MaxResults,omitempty"`
	NextToken                   *string                       `json:"NextToken,omitempty"`
	SortBy                      *TrainingJobSortByOptionsEnum `json:"SortBy,omitempty"`
	SortOrder                   *SortOrderEnum                `json:"SortOrder,omitempty"`
	StatusEquals                *TrainingJobStatusEnum        `json:"StatusEquals,omitempty"`
}
