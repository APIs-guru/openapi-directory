package shared

// ServiceQuotaIncreaseRequestInTemplate
// Information about a quota increase request.
type ServiceQuotaIncreaseRequestInTemplate struct {
	AwsRegion    *string  `json:"AwsRegion,omitempty"`
	DesiredValue *float64 `json:"DesiredValue,omitempty"`
	GlobalQuota  *bool    `json:"GlobalQuota,omitempty"`
	QuotaCode    *string  `json:"QuotaCode,omitempty"`
	QuotaName    *string  `json:"QuotaName,omitempty"`
	ServiceCode  *string  `json:"ServiceCode,omitempty"`
	ServiceName  *string  `json:"ServiceName,omitempty"`
	Unit         *string  `json:"Unit,omitempty"`
}
