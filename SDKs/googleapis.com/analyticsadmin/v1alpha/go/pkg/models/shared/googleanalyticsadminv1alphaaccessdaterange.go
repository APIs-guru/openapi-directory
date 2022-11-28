package shared

// GoogleAnalyticsAdminV1alphaAccessDateRange
// A contiguous range of days: startDate, startDate + 1, ..., endDate.
type GoogleAnalyticsAdminV1alphaAccessDateRange struct {
	EndDate   *string `json:"endDate,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
}
