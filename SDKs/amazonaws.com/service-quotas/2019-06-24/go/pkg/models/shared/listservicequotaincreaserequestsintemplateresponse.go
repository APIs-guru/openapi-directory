package shared

type ListServiceQuotaIncreaseRequestsInTemplateResponse struct {
	NextToken                                 *string                                 `json:"NextToken"`
	ServiceQuotaIncreaseRequestInTemplateList []ServiceQuotaIncreaseRequestInTemplate `json:"ServiceQuotaIncreaseRequestInTemplateList"`
}
