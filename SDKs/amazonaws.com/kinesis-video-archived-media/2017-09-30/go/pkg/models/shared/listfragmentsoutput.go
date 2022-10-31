package shared

type ListFragmentsOutput struct {
	Fragments []Fragment `json:"Fragments,omitempty"`
	NextToken *string    `json:"NextToken,omitempty"`
}
