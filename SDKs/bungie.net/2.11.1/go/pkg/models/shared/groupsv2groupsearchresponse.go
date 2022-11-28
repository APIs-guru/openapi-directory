package shared

type GroupsV2GroupSearchResponse struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []GroupsV2GroupV2Card
	TotalResults                 *int32
	UseTotalResults              *bool
}
