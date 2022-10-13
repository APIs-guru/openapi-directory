package shared

type ListPagesByContactResult struct {
	NextToken *string `json:"NextToken"`
	Pages     []Page  `json:"Pages"`
}
