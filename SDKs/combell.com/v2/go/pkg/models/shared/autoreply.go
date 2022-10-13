package shared

type AutoReply struct {
	Enabled *bool   `json:"enabled"`
	Message *string `json:"message"`
	Subject *string `json:"subject"`
}
