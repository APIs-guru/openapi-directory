package shared

type BatchGetChannelResponse struct {
	Channels []Channel    `json:"channels"`
	Errors   []BatchError `json:"errors"`
}
