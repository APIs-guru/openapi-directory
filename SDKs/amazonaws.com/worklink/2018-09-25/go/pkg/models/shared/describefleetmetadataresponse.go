package shared

import (
"time")

type DescribeFleetMetadataResponse struct {
    CompanyCode *string `json:"CompanyCode,omitempty"`
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    FleetName *string `json:"FleetName,omitempty"`
    FleetStatus *FleetStatusEnum `json:"FleetStatus,omitempty"`
    LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
    OptimizeForEndUserLocation *bool `json:"OptimizeForEndUserLocation,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

