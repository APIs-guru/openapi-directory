package shared

type SearchResultOfContentItemPublicContract struct {
	HasMore                      *bool
	Query                        *QueriesPagedQuery
	ReplacementContinuationToken *string
	Results                      []ContentContentItemPublicContract
	TotalResults                 *int32
	UseTotalResults              *bool
}
