package shared

// LoadBalancerTLSCertificateSummary
// Provides a summary of SSL/TLS certificate metadata.
type LoadBalancerTLSCertificateSummary struct {
	IsAttached *bool   `json:"isAttached,omitempty"`
	Name       *string `json:"name,omitempty"`
}
