package shared

type ListServiceQuotasResponse struct {
	NextToken *string        `json:"NextToken"`
	Quotas    []ServiceQuota `json:"Quotas"`
}
