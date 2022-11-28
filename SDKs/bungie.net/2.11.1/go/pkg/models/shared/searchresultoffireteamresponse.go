package shared

type SearchResultOfFireteamResponse struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []FireteamFireteamResponse
	TotalResults                 *int32
	UseTotalResults              *bool
}
