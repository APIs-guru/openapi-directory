package shared

type APICoreDtoTopsTopItem struct {
	EntityData            map[string]interface{} `json:"entityData"`
	ID                    *string                `json:"id"`
	LastHitDate           *string                `json:"lastHitDate"`
	SpiderClicks          *int64                 `json:"spiderClicks"`
	SpiderHits            *int64                 `json:"spiderHits"`
	SpiderViews           *int64                 `json:"spiderViews"`
	TotalClicks           *int64                 `json:"totalClicks"`
	TotalCommissionsCost  *float64               `json:"totalCommissionsCost"`
	TotalConversions      *int64                 `json:"totalConversions"`
	TotalConversionsCost  *float64               `json:"totalConversionsCost"`
	TotalConversionsValue *float64               `json:"totalConversionsValue"`
	TotalHits             *int64                 `json:"totalHits"`
	TotalViews            *int64                 `json:"totalViews"`
	UniqueClicks          *int64                 `json:"uniqueClicks"`
	UniqueHits            *int64                 `json:"uniqueHits"`
	UniqueViews           *int64                 `json:"uniqueViews"`
}
