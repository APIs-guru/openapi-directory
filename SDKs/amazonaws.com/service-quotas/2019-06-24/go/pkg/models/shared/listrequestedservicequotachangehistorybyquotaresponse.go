package shared



type ListRequestedServiceQuotaChangeHistoryByQuotaResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    RequestedQuotas []RequestedServiceQuotaChange `json:"RequestedQuotas,omitempty"`
    
}

