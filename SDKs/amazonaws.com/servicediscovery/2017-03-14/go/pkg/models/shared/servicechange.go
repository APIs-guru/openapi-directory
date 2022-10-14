package shared

type ServiceChange struct {
	Description       *string            `json:"Description,omitempty"`
	DNSConfig         *DNSConfigChange   `json:"DnsConfig,omitempty"`
	HealthCheckConfig *HealthCheckConfig `json:"HealthCheckConfig,omitempty"`
}
