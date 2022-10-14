package shared

type ListServiceQuotasResponse struct {
	NextToken *string        `json:"NextToken,omitempty"`
	Quotas    []ServiceQuota `json:"Quotas,omitempty"`
}
