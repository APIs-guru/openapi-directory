package shared

type DescribeTableResponse struct {
	ColumnList []ColumnMetadata `json:"ColumnList,omitempty"`
	NextToken  *string          `json:"NextToken,omitempty"`
	TableName  *string          `json:"TableName,omitempty"`
}
