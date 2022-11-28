package shared

// SendMessageResult
// The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.
type SendMessageResult struct {
	Md5OfMessageAttributes       *string
	Md5OfMessageBody             *string
	Md5OfMessageSystemAttributes *string
	MessageID                    *string
	SequenceNumber               *string
}
