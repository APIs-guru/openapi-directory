package shared

type InListFilter struct {
	CaseSensitive *bool    `json:"caseSensitive"`
	Values        []string `json:"values"`
}
