package shared

type ServiceQuotaIncreaseRequestInTemplate struct {
	AwsRegion    *string  `json:"AwsRegion"`
	DesiredValue *float64 `json:"DesiredValue"`
	GlobalQuota  *bool    `json:"GlobalQuota"`
	QuotaCode    *string  `json:"QuotaCode"`
	QuotaName    *string  `json:"QuotaName"`
	ServiceCode  *string  `json:"ServiceCode"`
	ServiceName  *string  `json:"ServiceName"`
	Unit         *string  `json:"Unit"`
}
