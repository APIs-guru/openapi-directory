package shared

type OverallVolume struct {
	DomainIspPlacements []DomainIspPlacement `json:"DomainIspPlacements,omitempty"`
	ReadRatePercent     *float64             `json:"ReadRatePercent,omitempty"`
	VolumeStatistics    *VolumeStatistics    `json:"VolumeStatistics,omitempty"`
}
