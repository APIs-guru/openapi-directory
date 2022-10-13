package shared

type ListResourceDelegatesResponse struct {
	Delegates []Delegate `json:"Delegates"`
	NextToken *string    `json:"NextToken"`
}
