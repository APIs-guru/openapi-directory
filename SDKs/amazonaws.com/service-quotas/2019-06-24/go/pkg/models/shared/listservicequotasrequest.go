package shared

type ListServiceQuotasRequest struct {
	MaxResults  *int64  `json:"MaxResults"`
	NextToken   *string `json:"NextToken"`
	ServiceCode string  `json:"ServiceCode"`
}
