package shared



type AttackVolume struct {
    BitsPerSecond *AttackVolumeStatistics `json:"BitsPerSecond,omitempty"`
    PacketsPerSecond *AttackVolumeStatistics `json:"PacketsPerSecond,omitempty"`
    RequestsPerSecond *AttackVolumeStatistics `json:"RequestsPerSecond,omitempty"`
    
}

