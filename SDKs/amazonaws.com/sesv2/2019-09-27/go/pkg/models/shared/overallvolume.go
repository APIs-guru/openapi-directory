package shared

// OverallVolume
// An object that contains information about email that was sent from the selected domain.
type OverallVolume struct {
	DomainIspPlacements []DomainIspPlacement `json:"DomainIspPlacements,omitempty"`
	ReadRatePercent     *float64             `json:"ReadRatePercent,omitempty"`
	VolumeStatistics    *VolumeStatistics    `json:"VolumeStatistics,omitempty"`
}
