package shared

type ListRequestedServiceQuotaChangeHistoryByQuotaResponse struct {
	NextToken       *string                       `json:"NextToken"`
	RequestedQuotas []RequestedServiceQuotaChange `json:"RequestedQuotas"`
}
