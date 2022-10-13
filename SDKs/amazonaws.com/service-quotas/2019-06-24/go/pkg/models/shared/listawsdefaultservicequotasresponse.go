package shared

type ListAwsDefaultServiceQuotasResponse struct {
	NextToken *string        `json:"NextToken"`
	Quotas    []ServiceQuota `json:"Quotas"`
}
