package shared

import (
	"time"
)

// DailyVolume
// An object that contains information about the volume of email sent on each day of the analysis period.
type DailyVolume struct {
	DomainIspPlacements []DomainIspPlacement `json:"DomainIspPlacements,omitempty"`
	StartDate           *time.Time           `json:"StartDate,omitempty"`
	VolumeStatistics    *VolumeStatistics    `json:"VolumeStatistics,omitempty"`
}
