package shared

type APICoreDtoAggregatedAggregatedResult struct {
	ActivityDay       *string                                         `json:"activityDay,omitempty"`
	CommissionsCost   *float64                                        `json:"commissionsCost,omitempty"`
	ConversionsCost   *float64                                        `json:"conversionsCost,omitempty"`
	ConversionsValue  *float64                                        `json:"conversionsValue,omitempty"`
	ConvertedClicks   *int64                                          `json:"convertedClicks,omitempty"`
	EntityData        map[string]interface{}                          `json:"entityData,omitempty"`
	EntityID          *string                                         `json:"entityId,omitempty"`
	FromDay           *string                                         `json:"fromDay,omitempty"`
	HourlyBreakDown   map[string]APICoreDtoAggregatedAggregatedResult `json:"hourlyBreakDown,omitempty"`
	LastHitDate       *string                                         `json:"lastHitDate,omitempty"`
	SpiderHitsCount   *int64                                          `json:"spiderHitsCount,omitempty"`
	ToDay             *string                                         `json:"toDay,omitempty"`
	TotalClicks       *int64                                          `json:"totalClicks,omitempty"`
	TotalViews        *int64                                          `json:"totalViews,omitempty"`
	UniqueClicks      *int64                                          `json:"uniqueClicks,omitempty"`
	UniqueConversions *int64                                          `json:"uniqueConversions,omitempty"`
	UniqueViews       *int64                                          `json:"uniqueViews,omitempty"`
}
