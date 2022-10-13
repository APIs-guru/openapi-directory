package shared

type LabelingJobOutputConfig struct {
	KmsKeyID     *string `json:"KmsKeyId"`
	S3OutputPath string  `json:"S3OutputPath"`
	SnsTopicArn  *string `json:"SnsTopicArn"`
}
