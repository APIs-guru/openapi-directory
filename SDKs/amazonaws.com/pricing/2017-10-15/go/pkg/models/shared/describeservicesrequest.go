package shared

type DescribeServicesRequest struct {
	FormatVersion *string `json:"FormatVersion"`
	MaxResults    *int64  `json:"MaxResults"`
	NextToken     *string `json:"NextToken"`
	ServiceCode   *string `json:"ServiceCode"`
}
