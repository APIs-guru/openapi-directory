package shared

import (
	"time"
)

type Service struct {
	Arn                     *string                  `json:"Arn,omitempty"`
	CreateDate              *time.Time               `json:"CreateDate,omitempty"`
	CreatorRequestID        *string                  `json:"CreatorRequestId,omitempty"`
	Description             *string                  `json:"Description,omitempty"`
	DNSConfig               *DNSConfig               `json:"DnsConfig,omitempty"`
	HealthCheckConfig       *HealthCheckConfig       `json:"HealthCheckConfig,omitempty"`
	HealthCheckCustomConfig *HealthCheckCustomConfig `json:"HealthCheckCustomConfig,omitempty"`
	ID                      *string                  `json:"Id,omitempty"`
	InstanceCount           *int64                   `json:"InstanceCount,omitempty"`
	Name                    *string                  `json:"Name,omitempty"`
	NamespaceID             *string                  `json:"NamespaceId,omitempty"`
	Type                    *ServiceTypeEnum         `json:"Type,omitempty"`
}
