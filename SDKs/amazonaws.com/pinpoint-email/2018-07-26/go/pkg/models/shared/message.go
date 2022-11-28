package shared

// Message
// Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.
type Message struct {
	Body    Body    `json:"Body"`
	Subject Content `json:"Subject"`
}
