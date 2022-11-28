package shared

type GroupsV2GroupMembershipSearchResponse struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []GroupsV2GroupMembership
	TotalResults                 *int32
	UseTotalResults              *bool
}
