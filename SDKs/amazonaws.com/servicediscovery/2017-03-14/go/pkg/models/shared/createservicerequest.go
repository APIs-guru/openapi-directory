package shared

type CreateServiceRequest struct {
	CreatorRequestID        *string                  `json:"CreatorRequestId"`
	Description             *string                  `json:"Description"`
	DNSConfig               *DNSConfig               `json:"DnsConfig"`
	HealthCheckConfig       *HealthCheckConfig       `json:"HealthCheckConfig"`
	HealthCheckCustomConfig *HealthCheckCustomConfig `json:"HealthCheckCustomConfig"`
	Name                    string                   `json:"Name"`
	NamespaceID             *string                  `json:"NamespaceId"`
	Tags                    []Tag                    `json:"Tags"`
	Type                    *ServiceTypeOptionEnum   `json:"Type"`
}
