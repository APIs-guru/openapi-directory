package shared

type GetUsageTotalsResponse struct {
	TimeRange   *TimeRangeEnum `json:"timeRange"`
	UsageTotals []UsageTotal   `json:"usageTotals"`
}
