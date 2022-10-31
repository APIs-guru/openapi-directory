package shared



type DNSConfig struct {
    DNSRecords []DNSRecord `json:"DnsRecords"`
    NamespaceID *string `json:"NamespaceId,omitempty"`
    RoutingPolicy *RoutingPolicyEnum `json:"RoutingPolicy,omitempty"`
    
}

