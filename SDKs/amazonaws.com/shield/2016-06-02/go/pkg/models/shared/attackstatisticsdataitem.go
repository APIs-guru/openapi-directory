package shared

// AttackStatisticsDataItem
// A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to.
type AttackStatisticsDataItem struct {
	AttackCount  int64         `json:"AttackCount"`
	AttackVolume *AttackVolume `json:"AttackVolume,omitempty"`
}
