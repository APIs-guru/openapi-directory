package shared

type ConfigMqtt struct {
	Broker          *string `json:"broker"`
	Clientid        *string `json:"clientid"`
	Filename        *string `json:"filename"`
	IsTLS           *string `json:"is_tls"`
	Password        *string `json:"password"`
	Port            *int32  `json:"port"`
	TLSConfFilename *string `json:"tls_conf_filename"`
	Username        *string `json:"username"`
	Version         *string `json:"version"`
}
