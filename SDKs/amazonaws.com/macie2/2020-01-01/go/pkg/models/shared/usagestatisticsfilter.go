package shared

type UsageStatisticsFilter struct {
	Comparator *UsageStatisticsFilterComparatorEnum `json:"comparator"`
	Key        *UsageStatisticsFilterKeyEnum        `json:"key"`
	Values     []string                             `json:"values"`
}
