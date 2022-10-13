package shared

type DescribeTableResponse struct {
	ColumnList []ColumnMetadata `json:"ColumnList"`
	NextToken  *string          `json:"NextToken"`
	TableName  *string          `json:"TableName"`
}
