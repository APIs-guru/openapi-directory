package shared

// ServiceChange
// A complex type that contains changes to an existing service.
type ServiceChange struct {
	Description       *string            `json:"Description,omitempty"`
	DNSConfig         *DNSConfigChange   `json:"DnsConfig,omitempty"`
	HealthCheckConfig *HealthCheckConfig `json:"HealthCheckConfig,omitempty"`
}
