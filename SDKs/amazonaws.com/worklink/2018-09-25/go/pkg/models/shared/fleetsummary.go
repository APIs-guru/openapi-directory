package shared

import (
	"time"
)

// FleetSummary
// The summary of the fleet.
type FleetSummary struct {
	CompanyCode     *string           `json:"CompanyCode,omitempty"`
	CreatedTime     *time.Time        `json:"CreatedTime,omitempty"`
	DisplayName     *string           `json:"DisplayName,omitempty"`
	FleetArn        *string           `json:"FleetArn,omitempty"`
	FleetName       *string           `json:"FleetName,omitempty"`
	FleetStatus     *FleetStatusEnum  `json:"FleetStatus,omitempty"`
	LastUpdatedTime *time.Time        `json:"LastUpdatedTime,omitempty"`
	Tags            map[string]string `json:"Tags,omitempty"`
}
