package shared

// LabelingJobOutput
// Specifies the location of the output produced by the labeling job.
type LabelingJobOutput struct {
	FinalActiveLearningModelArn *string `json:"FinalActiveLearningModelArn,omitempty"`
	OutputDatasetS3URI          string  `json:"OutputDatasetS3Uri"`
}
