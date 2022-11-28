package shared

type GroupsV2GetGroupsForMemberResponse struct {
	AreAllMembershipsInactive    map[string]bool
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []GroupsV2GroupMembership
	TotalResults                 *int32
	UseTotalResults              *bool
}
