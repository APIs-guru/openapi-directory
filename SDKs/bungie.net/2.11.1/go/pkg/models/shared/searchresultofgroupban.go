package shared

type SearchResultOfGroupBan struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []GroupsV2GroupBan
	TotalResults                 *int32
	UseTotalResults              *bool
}
