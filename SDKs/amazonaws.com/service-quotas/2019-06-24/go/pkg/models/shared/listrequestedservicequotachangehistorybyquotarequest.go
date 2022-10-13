package shared

type ListRequestedServiceQuotaChangeHistoryByQuotaRequest struct {
	MaxResults  *int64             `json:"MaxResults"`
	NextToken   *string            `json:"NextToken"`
	QuotaCode   string             `json:"QuotaCode"`
	ServiceCode string             `json:"ServiceCode"`
	Status      *RequestStatusEnum `json:"Status"`
}
