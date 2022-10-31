package shared



type GetUsageTotalsResponse struct {
    TimeRange *TimeRangeEnum `json:"timeRange,omitempty"`
    UsageTotals []UsageTotal `json:"usageTotals,omitempty"`
    
}

