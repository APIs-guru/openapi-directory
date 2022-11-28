package shared

// InputDataConfig
// The object that contains the Amazon S3 object location and access role required to train and tune your custom language model.
type InputDataConfig struct {
	DataAccessRoleArn string  `json:"DataAccessRoleArn"`
	S3URI             string  `json:"S3Uri"`
	TuningDataS3URI   *string `json:"TuningDataS3Uri,omitempty"`
}
