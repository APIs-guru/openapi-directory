package shared

type ListContactsRequest struct {
	AliasPrefix *string          `json:"AliasPrefix"`
	MaxResults  *int64           `json:"MaxResults"`
	NextToken   *string          `json:"NextToken"`
	Type        *ContactTypeEnum `json:"Type"`
}
