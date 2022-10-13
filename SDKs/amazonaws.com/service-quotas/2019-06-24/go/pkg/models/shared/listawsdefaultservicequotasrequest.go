package shared

type ListAwsDefaultServiceQuotasRequest struct {
	MaxResults  *int64  `json:"MaxResults"`
	NextToken   *string `json:"NextToken"`
	ServiceCode string  `json:"ServiceCode"`
}
