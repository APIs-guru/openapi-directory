package shared

type LabelingJobOutput struct {
	FinalActiveLearningModelArn *string `json:"FinalActiveLearningModelArn,omitempty"`
	OutputDatasetS3URI          string  `json:"OutputDatasetS3Uri"`
}
