package shared

type ListFragmentsOutput struct {
	Fragments []Fragment `json:"Fragments"`
	NextToken *string    `json:"NextToken"`
}
