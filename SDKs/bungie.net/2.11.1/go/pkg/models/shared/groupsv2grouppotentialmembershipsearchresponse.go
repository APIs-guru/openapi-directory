package shared

type GroupsV2GroupPotentialMembershipSearchResponse struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []GroupsV2GroupPotentialMembership
	TotalResults                 *int32
	UseTotalResults              *bool
}
