package shared

type MailboxDetail struct {
	ActualSize  *int32       `json:"actual_size"`
	AutoForward *AutoForward `json:"auto_forward"`
	AutoReply   *AutoReply   `json:"auto_reply"`
	Login       *string      `json:"login"`
	MaxSize     *int32       `json:"max_size"`
	Name        *string      `json:"name"`
}
