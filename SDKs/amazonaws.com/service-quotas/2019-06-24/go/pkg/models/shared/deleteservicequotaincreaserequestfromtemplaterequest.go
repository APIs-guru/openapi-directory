package shared

type DeleteServiceQuotaIncreaseRequestFromTemplateRequest struct {
	AwsRegion   string `json:"AwsRegion"`
	QuotaCode   string `json:"QuotaCode"`
	ServiceCode string `json:"ServiceCode"`
}
