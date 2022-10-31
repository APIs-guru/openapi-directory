package shared

type NotificationChannel struct {
	RoleArn     string `json:"RoleArn"`
	SnsTopicArn string `json:"SNSTopicArn"`
}
