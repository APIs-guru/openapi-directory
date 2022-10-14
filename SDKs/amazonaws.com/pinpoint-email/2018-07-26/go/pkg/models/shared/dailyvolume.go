package shared

import (
	"time"
)

type DailyVolume struct {
	DomainIspPlacements []DomainIspPlacement `json:"DomainIspPlacements,omitempty"`
	StartDate           *time.Time           `json:"StartDate,omitempty"`
	VolumeStatistics    *VolumeStatistics    `json:"VolumeStatistics,omitempty"`
}
