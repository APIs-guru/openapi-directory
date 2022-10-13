package shared

type OverallVolume struct {
	DomainIspPlacements []DomainIspPlacement `json:"DomainIspPlacements"`
	ReadRatePercent     *float64             `json:"ReadRatePercent"`
	VolumeStatistics    *VolumeStatistics    `json:"VolumeStatistics"`
}
