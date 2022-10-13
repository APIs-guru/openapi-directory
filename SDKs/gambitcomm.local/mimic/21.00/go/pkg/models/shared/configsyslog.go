package shared

type ConfigSyslog struct {
	Client     *string `json:"client"`
	Hostname   *string `json:"hostname"`
	Localport  *int32  `json:"localport"`
	Separator  *string `json:"separator"`
	Sequence   *int32  `json:"sequence"`
	Server     *string `json:"server"`
	Serverport *int32  `json:"serverport"`
	Timestamp  *string `json:"timestamp"`
}
