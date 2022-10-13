package shared

import (
	"time"
)

type ServiceSummary struct {
	Arn                     *string                  `json:"Arn"`
	CreateDate              *time.Time               `json:"CreateDate"`
	Description             *string                  `json:"Description"`
	DNSConfig               *DNSConfig               `json:"DnsConfig"`
	HealthCheckConfig       *HealthCheckConfig       `json:"HealthCheckConfig"`
	HealthCheckCustomConfig *HealthCheckCustomConfig `json:"HealthCheckCustomConfig"`
	ID                      *string                  `json:"Id"`
	InstanceCount           *int64                   `json:"InstanceCount"`
	Name                    *string                  `json:"Name"`
	Type                    *ServiceTypeEnum         `json:"Type"`
}
