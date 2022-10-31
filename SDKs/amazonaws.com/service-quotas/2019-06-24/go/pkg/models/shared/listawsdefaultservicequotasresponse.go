package shared

type ListAwsDefaultServiceQuotasResponse struct {
	NextToken *string        `json:"NextToken,omitempty"`
	Quotas    []ServiceQuota `json:"Quotas,omitempty"`
}
