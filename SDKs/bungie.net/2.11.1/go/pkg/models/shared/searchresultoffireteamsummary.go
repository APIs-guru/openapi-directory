package shared

type SearchResultOfFireteamSummary struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []FireteamFireteamSummary
	TotalResults                 *int32
	UseTotalResults              *bool
}
