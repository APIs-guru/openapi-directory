package shared

type GetAttributeValuesRequest struct {
	AttributeName string  `json:"AttributeName"`
	MaxResults    *int64  `json:"MaxResults"`
	NextToken     *string `json:"NextToken"`
	ServiceCode   string  `json:"ServiceCode"`
}
