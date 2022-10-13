package shared

type ListTablesResponse struct {
	NextToken *string `json:"NextToken"`
	Tables    []Table `json:"Tables"`
}
