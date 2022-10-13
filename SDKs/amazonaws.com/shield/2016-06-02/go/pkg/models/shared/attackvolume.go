package shared

type AttackVolume struct {
	BitsPerSecond     *AttackVolumeStatistics `json:"BitsPerSecond"`
	PacketsPerSecond  *AttackVolumeStatistics `json:"PacketsPerSecond"`
	RequestsPerSecond *AttackVolumeStatistics `json:"RequestsPerSecond"`
}
