package shared

type UpdateSyslogConfigProtocolEnum string

const (
	UpdateSyslogConfigProtocolEnumTCP UpdateSyslogConfigProtocolEnum = "TCP"
	UpdateSyslogConfigProtocolEnumUDP UpdateSyslogConfigProtocolEnum = "UDP"
)

// UpdateSyslogConfig
// Request model for updating syslog settings
type UpdateSyslogConfig struct {
	Enabled      *bool                           `json:"enabled,omitempty"`
	Host         *string                         `json:"host,omitempty"`
	LogIPEnabled *bool                           `json:"logIpEnabled,omitempty"`
	Port         *int32                          `json:"port,omitempty"`
	Protocol     *UpdateSyslogConfigProtocolEnum `json:"protocol,omitempty"`
}
