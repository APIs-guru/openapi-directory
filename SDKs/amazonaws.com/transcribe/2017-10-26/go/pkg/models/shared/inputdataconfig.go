package shared

type InputDataConfig struct {
	DataAccessRoleArn string  `json:"DataAccessRoleArn"`
	S3URI             string  `json:"S3Uri"`
	TuningDataS3URI   *string `json:"TuningDataS3Uri"`
}
