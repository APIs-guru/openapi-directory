package shared

type ListStatementsRequest struct {
	MaxResults    *int64            `json:"MaxResults"`
	NextToken     *string           `json:"NextToken"`
	RoleLevel     *bool             `json:"RoleLevel"`
	StatementName *string           `json:"StatementName"`
	Status        *StatusStringEnum `json:"Status"`
}
