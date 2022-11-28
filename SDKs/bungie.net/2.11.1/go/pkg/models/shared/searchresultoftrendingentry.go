package shared

type SearchResultOfTrendingEntry struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []TrendingTrendingEntry
	TotalResults                 *int32
	UseTotalResults              *bool
}
