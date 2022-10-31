package shared

type ListServiceQuotaIncreaseRequestsInTemplateResponse struct {
	NextToken                                 *string                                 `json:"NextToken,omitempty"`
	ServiceQuotaIncreaseRequestInTemplateList []ServiceQuotaIncreaseRequestInTemplate `json:"ServiceQuotaIncreaseRequestInTemplateList,omitempty"`
}
