package shared

type ListTablesResponse struct {
	NextToken *string       `json:"NextToken,omitempty"`
	Tables    []TableMember `json:"Tables,omitempty"`
}
