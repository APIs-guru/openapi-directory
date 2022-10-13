package shared

type SyslogMsg struct {
	Hostname  *string `json:"hostname"`
	Message   *string `json:"message"`
	Separator *string `json:"separator"`
	Sequence  *string `json:"sequence"`
	Timestamp *string `json:"timestamp"`
}
