package shared

type ListRequestedServiceQuotaChangeHistoryRequest struct {
	MaxResults  *int64             `json:"MaxResults"`
	NextToken   *string            `json:"NextToken"`
	ServiceCode *string            `json:"ServiceCode"`
	Status      *RequestStatusEnum `json:"Status"`
}
