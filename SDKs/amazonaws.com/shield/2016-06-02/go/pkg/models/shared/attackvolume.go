package shared

// AttackVolume
// Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.
type AttackVolume struct {
	BitsPerSecond     *AttackVolumeStatistics `json:"BitsPerSecond,omitempty"`
	PacketsPerSecond  *AttackVolumeStatistics `json:"PacketsPerSecond,omitempty"`
	RequestsPerSecond *AttackVolumeStatistics `json:"RequestsPerSecond,omitempty"`
}
