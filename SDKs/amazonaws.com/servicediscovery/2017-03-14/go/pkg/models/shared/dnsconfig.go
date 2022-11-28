package shared

// DNSConfig
// A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.
type DNSConfig struct {
	DNSRecords    []DNSRecord        `json:"DnsRecords"`
	NamespaceID   *string            `json:"NamespaceId,omitempty"`
	RoutingPolicy *RoutingPolicyEnum `json:"RoutingPolicy,omitempty"`
}
