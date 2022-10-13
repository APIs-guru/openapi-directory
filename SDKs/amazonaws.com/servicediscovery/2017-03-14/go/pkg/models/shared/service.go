package shared

import (
	"time"
)

type Service struct {
	Arn                     *string                  `json:"Arn"`
	CreateDate              *time.Time               `json:"CreateDate"`
	CreatorRequestID        *string                  `json:"CreatorRequestId"`
	Description             *string                  `json:"Description"`
	DNSConfig               *DNSConfig               `json:"DnsConfig"`
	HealthCheckConfig       *HealthCheckConfig       `json:"HealthCheckConfig"`
	HealthCheckCustomConfig *HealthCheckCustomConfig `json:"HealthCheckCustomConfig"`
	ID                      *string                  `json:"Id"`
	InstanceCount           *int64                   `json:"InstanceCount"`
	Name                    *string                  `json:"Name"`
	NamespaceID             *string                  `json:"NamespaceId"`
	Type                    *ServiceTypeEnum         `json:"Type"`
}
