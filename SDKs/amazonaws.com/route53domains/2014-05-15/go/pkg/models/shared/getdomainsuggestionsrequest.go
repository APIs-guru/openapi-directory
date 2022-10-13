package shared

type GetDomainSuggestionsRequest struct {
	DomainName      string `json:"DomainName"`
	OnlyAvailable   bool   `json:"OnlyAvailable"`
	SuggestionCount int64  `json:"SuggestionCount"`
}
