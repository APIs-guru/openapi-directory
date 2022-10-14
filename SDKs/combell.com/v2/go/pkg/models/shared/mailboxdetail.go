package shared

type MailboxDetail struct {
	ActualSize  *int32       `json:"actual_size,omitempty"`
	AutoForward *AutoForward `json:"auto_forward,omitempty"`
	AutoReply   *AutoReply   `json:"auto_reply,omitempty"`
	Login       *string      `json:"login,omitempty"`
	MaxSize     *int32       `json:"max_size,omitempty"`
	Name        *string      `json:"name,omitempty"`
}
