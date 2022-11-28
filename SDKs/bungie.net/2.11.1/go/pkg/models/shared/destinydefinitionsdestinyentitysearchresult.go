package shared

// DestinyDefinitionsDestinyEntitySearchResultResults
// The items found that are matches/near matches for the searched-for term, sorted by something vaguely resembling "relevance". Hopefully this will get better in the future.
type DestinyDefinitionsDestinyEntitySearchResultResults struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []DestinyDefinitionsDestinyEntitySearchResultItem
	TotalResults                 *int32
	UseTotalResults              *bool
}

// DestinyDefinitionsDestinyEntitySearchResult
// The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
type DestinyDefinitionsDestinyEntitySearchResult struct {
	Results        *DestinyDefinitionsDestinyEntitySearchResultResults
	SuggestedWords []string
}
