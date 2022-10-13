package shared

type GetStatementResultResponse struct {
	ColumnMetadata []ColumnMetadata `json:"ColumnMetadata"`
	NextToken      *string          `json:"NextToken"`
	Records        [][]Field        `json:"Records"`
	TotalNumRows   *int64           `json:"TotalNumRows"`
}
