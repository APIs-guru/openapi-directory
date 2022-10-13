package shared

type SyslogConfigProtocolEnum string

const (
	SyslogConfigProtocolEnumTCP SyslogConfigProtocolEnum = "TCP"
	SyslogConfigProtocolEnumUDP SyslogConfigProtocolEnum = "UDP"
)

type SyslogConfig struct {
	Enabled      *bool                     `json:"enabled"`
	Host         *string                   `json:"host"`
	LogIPEnabled *bool                     `json:"logIpEnabled"`
	Port         *int32                    `json:"port"`
	Protocol     *SyslogConfigProtocolEnum `json:"protocol"`
}
