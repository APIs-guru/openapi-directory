package shared

type GetServiceQuotaIncreaseRequestFromTemplateRequest struct {
	AwsRegion   string `json:"AwsRegion"`
	QuotaCode   string `json:"QuotaCode"`
	ServiceCode string `json:"ServiceCode"`
}
