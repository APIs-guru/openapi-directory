package shared

type ListAliasesRequest struct {
	EntityID       string  `json:"EntityId"`
	MaxResults     *int64  `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
	OrganizationID string  `json:"OrganizationId"`
}
