package shared



type ListRequestedServiceQuotaChangeHistoryResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    RequestedQuotas []RequestedServiceQuotaChange `json:"RequestedQuotas,omitempty"`
    
}

