package shared

type ServiceChange struct {
	Description       *string            `json:"Description"`
	DNSConfig         *DNSConfigChange   `json:"DnsConfig"`
	HealthCheckConfig *HealthCheckConfig `json:"HealthCheckConfig"`
}
