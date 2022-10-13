package shared

type UpdateConstraintInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	Description    *string `json:"Description"`
	ID             string  `json:"Id"`
	Parameters     *string `json:"Parameters"`
}
