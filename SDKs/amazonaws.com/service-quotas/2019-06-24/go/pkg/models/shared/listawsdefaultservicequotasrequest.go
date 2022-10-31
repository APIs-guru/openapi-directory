package shared

type ListAwsDefaultServiceQuotasRequest struct {
	MaxResults  *int64  `json:"MaxResults,omitempty"`
	NextToken   *string `json:"NextToken,omitempty"`
	ServiceCode string  `json:"ServiceCode"`
}
