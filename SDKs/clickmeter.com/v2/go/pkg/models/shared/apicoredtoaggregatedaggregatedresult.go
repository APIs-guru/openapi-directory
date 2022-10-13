package shared

type APICoreDtoAggregatedAggregatedResult struct {
	ActivityDay       *string                                         `json:"activityDay"`
	CommissionsCost   *float64                                        `json:"commissionsCost"`
	ConversionsCost   *float64                                        `json:"conversionsCost"`
	ConversionsValue  *float64                                        `json:"conversionsValue"`
	ConvertedClicks   *int64                                          `json:"convertedClicks"`
	EntityData        map[string]interface{}                          `json:"entityData"`
	EntityID          *string                                         `json:"entityId"`
	FromDay           *string                                         `json:"fromDay"`
	HourlyBreakDown   map[string]APICoreDtoAggregatedAggregatedResult `json:"hourlyBreakDown"`
	LastHitDate       *string                                         `json:"lastHitDate"`
	SpiderHitsCount   *int64                                          `json:"spiderHitsCount"`
	ToDay             *string                                         `json:"toDay"`
	TotalClicks       *int64                                          `json:"totalClicks"`
	TotalViews        *int64                                          `json:"totalViews"`
	UniqueClicks      *int64                                          `json:"uniqueClicks"`
	UniqueConversions *int64                                          `json:"uniqueConversions"`
	UniqueViews       *int64                                          `json:"uniqueViews"`
}
