package shared

type ConfigMqtt struct {
	Broker          *string `json:"broker,omitempty"`
	Clientid        *string `json:"clientid,omitempty"`
	Filename        *string `json:"filename,omitempty"`
	IsTLS           *string `json:"is_tls,omitempty"`
	Password        *string `json:"password,omitempty"`
	Port            *int32  `json:"port,omitempty"`
	TLSConfFilename *string `json:"tls_conf_filename,omitempty"`
	Username        *string `json:"username,omitempty"`
	Version         *string `json:"version,omitempty"`
}
