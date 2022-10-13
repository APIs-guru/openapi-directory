package shared

type ListDistributedGrantsResponse struct {
	Grants    []Grant `json:"Grants"`
	NextToken *string `json:"NextToken"`
}
