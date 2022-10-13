package shared

import (
	"time"
)

type DescribeFleetMetadataResponse struct {
	CompanyCode                *string           `json:"CompanyCode"`
	CreatedTime                *time.Time        `json:"CreatedTime"`
	DisplayName                *string           `json:"DisplayName"`
	FleetName                  *string           `json:"FleetName"`
	FleetStatus                *FleetStatusEnum  `json:"FleetStatus"`
	LastUpdatedTime            *time.Time        `json:"LastUpdatedTime"`
	OptimizeForEndUserLocation *bool             `json:"OptimizeForEndUserLocation"`
	Tags                       map[string]string `json:"Tags"`
}
