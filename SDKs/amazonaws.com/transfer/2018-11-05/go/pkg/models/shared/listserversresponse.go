package shared

type ListServersResponse struct {
	NextToken *string        `json:"NextToken"`
	Servers   []ListedServer `json:"Servers"`
}
