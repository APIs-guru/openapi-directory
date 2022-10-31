package shared



type AttackStatisticsDataItem struct {
    AttackCount int64 `json:"AttackCount"`
    AttackVolume *AttackVolume `json:"AttackVolume,omitempty"`
    
}

