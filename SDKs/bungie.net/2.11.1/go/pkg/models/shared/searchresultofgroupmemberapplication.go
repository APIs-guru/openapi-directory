package shared

type SearchResultOfGroupMemberApplication struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []GroupsV2GroupMemberApplication
	TotalResults                 *int32
	UseTotalResults              *bool
}
