package shared

type SearchResultPage struct {
	Next             *string                  `json:"next"`
	Page             *int32                   `json:"page"`
	Pagelen          *int32                   `json:"pagelen"`
	Previous         *string                  `json:"previous"`
	QuerySubstituted *bool                    `json:"query_substituted"`
	Size             *int64                   `json:"size"`
	Values           []SearchCodeSearchResult `json:"values"`
}
