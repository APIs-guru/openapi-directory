package shared



type CreateServiceRequest struct {
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    Description *string `json:"Description,omitempty"`
    DNSConfig *DNSConfig `json:"DnsConfig,omitempty"`
    HealthCheckConfig *HealthCheckConfig `json:"HealthCheckConfig,omitempty"`
    HealthCheckCustomConfig *HealthCheckCustomConfig `json:"HealthCheckCustomConfig,omitempty"`
    Name string `json:"Name"`
    NamespaceID *string `json:"NamespaceId,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Type *ServiceTypeOptionEnum `json:"Type,omitempty"`
    
}

