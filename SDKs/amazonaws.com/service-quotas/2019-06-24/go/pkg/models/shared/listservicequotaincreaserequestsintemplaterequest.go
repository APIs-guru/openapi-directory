package shared

type ListServiceQuotaIncreaseRequestsInTemplateRequest struct {
	AwsRegion   *string `json:"AwsRegion,omitempty"`
	MaxResults  *int64  `json:"MaxResults,omitempty"`
	NextToken   *string `json:"NextToken,omitempty"`
	ServiceCode *string `json:"ServiceCode,omitempty"`
}
