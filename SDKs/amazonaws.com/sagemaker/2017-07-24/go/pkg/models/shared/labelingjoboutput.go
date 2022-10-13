package shared

type LabelingJobOutput struct {
	FinalActiveLearningModelArn *string `json:"FinalActiveLearningModelArn"`
	OutputDatasetS3URI          string  `json:"OutputDatasetS3Uri"`
}
