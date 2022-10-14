package shared

type ConfigTod struct {
	Port    *int32  `json:"port,omitempty"`
	Retries *int32  `json:"retries,omitempty"`
	Script  *string `json:"script,omitempty"`
	Server  *string `json:"server,omitempty"`
	Timeout *int32  `json:"timeout,omitempty"`
}
