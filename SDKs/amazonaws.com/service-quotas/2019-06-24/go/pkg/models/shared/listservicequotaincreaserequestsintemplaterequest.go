package shared

type ListServiceQuotaIncreaseRequestsInTemplateRequest struct {
	AwsRegion   *string `json:"AwsRegion"`
	MaxResults  *int64  `json:"MaxResults"`
	NextToken   *string `json:"NextToken"`
	ServiceCode *string `json:"ServiceCode"`
}
