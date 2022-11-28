package shared

// Message
// An Amazon SQS message.
type Message struct {
	Attributes             map[string]string
	Body                   *string
	Md5OfBody              *string
	Md5OfMessageAttributes *string
	MessageAttributes      map[string]MessageAttributeValue
	MessageID              *string
	ReceiptHandle          *string
}
