package shared

type DNSConfig struct {
	DNSRecords    []DNSRecord        `json:"DnsRecords"`
	NamespaceID   *string            `json:"NamespaceId"`
	RoutingPolicy *RoutingPolicyEnum `json:"RoutingPolicy"`
}
