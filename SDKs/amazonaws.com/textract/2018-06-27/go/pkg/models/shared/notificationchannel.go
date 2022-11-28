package shared

// NotificationChannel
// The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>.
type NotificationChannel struct {
	RoleArn     string `json:"RoleArn"`
	SnsTopicArn string `json:"SNSTopicArn"`
}
