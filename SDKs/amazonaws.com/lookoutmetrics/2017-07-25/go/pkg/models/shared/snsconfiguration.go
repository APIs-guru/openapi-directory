package shared

// SnsConfiguration
// Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
type SnsConfiguration struct {
	RoleArn     string `json:"RoleArn"`
	SnsTopicArn string `json:"SnsTopicArn"`
}
