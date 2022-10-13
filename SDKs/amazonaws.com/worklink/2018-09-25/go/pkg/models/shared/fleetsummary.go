package shared

import (
	"time"
)

type FleetSummary struct {
	CompanyCode     *string           `json:"CompanyCode"`
	CreatedTime     *time.Time        `json:"CreatedTime"`
	DisplayName     *string           `json:"DisplayName"`
	FleetArn        *string           `json:"FleetArn"`
	FleetName       *string           `json:"FleetName"`
	FleetStatus     *FleetStatusEnum  `json:"FleetStatus"`
	LastUpdatedTime *time.Time        `json:"LastUpdatedTime"`
	Tags            map[string]string `json:"Tags"`
}
