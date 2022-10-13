package shared

type ListTablesResponse struct {
	NextToken *string       `json:"NextToken"`
	Tables    []TableMember `json:"Tables"`
}
