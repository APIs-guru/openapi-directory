package shared

type ListRequestedServiceQuotaChangeHistoryByQuotaRequest struct {
	MaxResults  *int64             `json:"MaxResults,omitempty"`
	NextToken   *string            `json:"NextToken,omitempty"`
	QuotaCode   string             `json:"QuotaCode"`
	ServiceCode string             `json:"ServiceCode"`
	Status      *RequestStatusEnum `json:"Status,omitempty"`
}
