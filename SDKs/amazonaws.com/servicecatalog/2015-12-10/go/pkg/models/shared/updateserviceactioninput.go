package shared

type UpdateServiceActionInput struct {
	AcceptLanguage *string           `json:"AcceptLanguage"`
	Definition     map[string]string `json:"Definition"`
	Description    *string           `json:"Description"`
	ID             string            `json:"Id"`
	Name           *string           `json:"Name"`
}
