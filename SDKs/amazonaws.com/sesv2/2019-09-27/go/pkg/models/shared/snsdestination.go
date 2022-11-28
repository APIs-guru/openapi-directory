package shared

// SnsDestination
// An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
type SnsDestination struct {
	TopicArn string `json:"TopicArn"`
}
