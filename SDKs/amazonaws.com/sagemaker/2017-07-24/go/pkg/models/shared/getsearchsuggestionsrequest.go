package shared

type GetSearchSuggestionsRequest struct {
	Resource        ResourceTypeEnum `json:"Resource"`
	SuggestionQuery *SuggestionQuery `json:"SuggestionQuery"`
}
