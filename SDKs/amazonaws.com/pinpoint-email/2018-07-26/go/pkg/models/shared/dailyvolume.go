package shared

import (
	"time"
)

type DailyVolume struct {
	DomainIspPlacements []DomainIspPlacement `json:"DomainIspPlacements"`
	StartDate           *time.Time           `json:"StartDate"`
	VolumeStatistics    *VolumeStatistics    `json:"VolumeStatistics"`
}
