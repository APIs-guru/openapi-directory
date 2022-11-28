package shared

type QueriesPagedQuery struct {
	CurrentPage              *int32
	ItemsPerPage             *int32
	RequestContinuationToken *string
}
