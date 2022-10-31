package shared

type DescribeAttackStatisticsResponse struct {
	DataItems []AttackStatisticsDataItem `json:"DataItems"`
	TimeRange TimeRange                  `json:"TimeRange"`
}
