package shared

type ListTrainingJobsForHyperParameterTuningJobRequest struct {
	HyperParameterTuningJobName string                        `json:"HyperParameterTuningJobName"`
	MaxResults                  *int64                        `json:"MaxResults"`
	NextToken                   *string                       `json:"NextToken"`
	SortBy                      *TrainingJobSortByOptionsEnum `json:"SortBy"`
	SortOrder                   *SortOrderEnum                `json:"SortOrder"`
	StatusEquals                *TrainingJobStatusEnum        `json:"StatusEquals"`
}
