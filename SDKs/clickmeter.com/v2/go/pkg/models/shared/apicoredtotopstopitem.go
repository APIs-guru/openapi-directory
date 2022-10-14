package shared

type APICoreDtoTopsTopItem struct {
	EntityData            map[string]interface{} `json:"entityData,omitempty"`
	ID                    *string                `json:"id,omitempty"`
	LastHitDate           *string                `json:"lastHitDate,omitempty"`
	SpiderClicks          *int64                 `json:"spiderClicks,omitempty"`
	SpiderHits            *int64                 `json:"spiderHits,omitempty"`
	SpiderViews           *int64                 `json:"spiderViews,omitempty"`
	TotalClicks           *int64                 `json:"totalClicks,omitempty"`
	TotalCommissionsCost  *float64               `json:"totalCommissionsCost,omitempty"`
	TotalConversions      *int64                 `json:"totalConversions,omitempty"`
	TotalConversionsCost  *float64               `json:"totalConversionsCost,omitempty"`
	TotalConversionsValue *float64               `json:"totalConversionsValue,omitempty"`
	TotalHits             *int64                 `json:"totalHits,omitempty"`
	TotalViews            *int64                 `json:"totalViews,omitempty"`
	UniqueClicks          *int64                 `json:"uniqueClicks,omitempty"`
	UniqueHits            *int64                 `json:"uniqueHits,omitempty"`
	UniqueViews           *int64                 `json:"uniqueViews,omitempty"`
}
