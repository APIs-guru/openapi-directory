package shared

type UpdateProductInput struct {
	AcceptLanguage     *string  `json:"AcceptLanguage"`
	AddTags            []Tag    `json:"AddTags"`
	Description        *string  `json:"Description"`
	Distributor        *string  `json:"Distributor"`
	ID                 string   `json:"Id"`
	Name               *string  `json:"Name"`
	Owner              *string  `json:"Owner"`
	RemoveTags         []string `json:"RemoveTags"`
	SupportDescription *string  `json:"SupportDescription"`
	SupportEmail       *string  `json:"SupportEmail"`
	SupportURL         *string  `json:"SupportUrl"`
}
