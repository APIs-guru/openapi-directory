package shared

type ListRequestedServiceQuotaChangeHistoryResponse struct {
	NextToken       *string                       `json:"NextToken"`
	RequestedQuotas []RequestedServiceQuotaChange `json:"RequestedQuotas"`
}
