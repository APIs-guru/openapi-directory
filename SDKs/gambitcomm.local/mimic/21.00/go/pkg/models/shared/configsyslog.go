package shared

type ConfigSyslog struct {
	Client     *string `json:"client,omitempty"`
	Hostname   *string `json:"hostname,omitempty"`
	Localport  *int32  `json:"localport,omitempty"`
	Separator  *string `json:"separator,omitempty"`
	Sequence   *int32  `json:"sequence,omitempty"`
	Server     *string `json:"server,omitempty"`
	Serverport *int32  `json:"serverport,omitempty"`
	Timestamp  *string `json:"timestamp,omitempty"`
}
