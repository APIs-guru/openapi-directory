package shared

// UsageStatisticsFilter
// Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.
type UsageStatisticsFilter struct {
	Comparator *UsageStatisticsFilterComparatorEnum `json:"comparator,omitempty"`
	Key        *UsageStatisticsFilterKeyEnum        `json:"key,omitempty"`
	Values     []string                             `json:"values,omitempty"`
}
