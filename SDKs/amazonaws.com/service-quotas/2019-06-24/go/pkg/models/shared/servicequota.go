package shared

type ServiceQuota struct {
	Adjustable  *bool        `json:"Adjustable"`
	ErrorReason *ErrorReason `json:"ErrorReason"`
	GlobalQuota *bool        `json:"GlobalQuota"`
	Period      *QuotaPeriod `json:"Period"`
	QuotaArn    *string      `json:"QuotaArn"`
	QuotaCode   *string      `json:"QuotaCode"`
	QuotaName   *string      `json:"QuotaName"`
	ServiceCode *string      `json:"ServiceCode"`
	ServiceName *string      `json:"ServiceName"`
	Unit        *string      `json:"Unit"`
	UsageMetric *MetricInfo  `json:"UsageMetric"`
	Value       *float64     `json:"Value"`
}
