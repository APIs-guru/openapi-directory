package shared

// SendSmsRequest
// Send SMS Request
type SendSmsRequest struct {
	Content string `json:"content"`
	From    string `json:"from"`
	To      int64  `json:"to"`
}
