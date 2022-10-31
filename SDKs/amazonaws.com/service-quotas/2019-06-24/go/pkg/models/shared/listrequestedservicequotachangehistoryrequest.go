package shared

type ListRequestedServiceQuotaChangeHistoryRequest struct {
	MaxResults  *int64             `json:"MaxResults,omitempty"`
	NextToken   *string            `json:"NextToken,omitempty"`
	ServiceCode *string            `json:"ServiceCode,omitempty"`
	Status      *RequestStatusEnum `json:"Status,omitempty"`
}
