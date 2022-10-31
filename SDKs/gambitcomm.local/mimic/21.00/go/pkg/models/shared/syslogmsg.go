package shared

type SyslogMsg struct {
	Hostname  *string `json:"hostname,omitempty"`
	Message   *string `json:"message,omitempty"`
	Separator *string `json:"separator,omitempty"`
	Sequence  *string `json:"sequence,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}
