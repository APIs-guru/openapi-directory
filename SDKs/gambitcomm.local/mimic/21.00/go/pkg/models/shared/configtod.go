package shared

type ConfigTod struct {
	Port    *int32  `json:"port"`
	Retries *int32  `json:"retries"`
	Script  *string `json:"script"`
	Server  *string `json:"server"`
	Timeout *int32  `json:"timeout"`
}
