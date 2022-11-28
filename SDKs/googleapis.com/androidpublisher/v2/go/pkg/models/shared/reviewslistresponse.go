package shared

type ReviewsListResponse struct {
	PageInfo        *PageInfo
	Reviews         []Review
	TokenPagination *TokenPagination
}
