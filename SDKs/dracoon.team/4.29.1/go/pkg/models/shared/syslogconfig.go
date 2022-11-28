package shared

type SyslogConfigProtocolEnum string

const (
	SyslogConfigProtocolEnumTCP SyslogConfigProtocolEnum = "TCP"
	SyslogConfigProtocolEnumUDP SyslogConfigProtocolEnum = "UDP"
)

// SyslogConfig
// Syslog settings
type SyslogConfig struct {
	Enabled      *bool                     `json:"enabled,omitempty"`
	Host         *string                   `json:"host,omitempty"`
	LogIPEnabled *bool                     `json:"logIpEnabled,omitempty"`
	Port         *int32                    `json:"port,omitempty"`
	Protocol     *SyslogConfigProtocolEnum `json:"protocol,omitempty"`
}
