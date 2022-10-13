package shared

type ListReceivedGrantsResponse struct {
	Grants    []Grant `json:"Grants"`
	NextToken *string `json:"NextToken"`
}
