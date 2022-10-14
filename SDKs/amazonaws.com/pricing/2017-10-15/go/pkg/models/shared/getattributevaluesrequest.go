package shared

type GetAttributeValuesRequest struct {
	AttributeName string  `json:"AttributeName"`
	MaxResults    *int64  `json:"MaxResults,omitempty"`
	NextToken     *string `json:"NextToken,omitempty"`
	ServiceCode   string  `json:"ServiceCode"`
}
