package shared

type UpdateSyslogConfigProtocolEnum string

const (
	UpdateSyslogConfigProtocolEnumTCP UpdateSyslogConfigProtocolEnum = "TCP"
	UpdateSyslogConfigProtocolEnumUDP UpdateSyslogConfigProtocolEnum = "UDP"
)

type UpdateSyslogConfig struct {
	Enabled      *bool                           `json:"enabled"`
	Host         *string                         `json:"host"`
	LogIPEnabled *bool                           `json:"logIpEnabled"`
	Port         *int32                          `json:"port"`
	Protocol     *UpdateSyslogConfigProtocolEnum `json:"protocol"`
}
