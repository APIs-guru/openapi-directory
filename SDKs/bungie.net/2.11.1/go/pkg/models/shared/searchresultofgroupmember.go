package shared

type SearchResultOfGroupMember struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []GroupsV2GroupMember
	TotalResults                 *int32
	UseTotalResults              *bool
}
