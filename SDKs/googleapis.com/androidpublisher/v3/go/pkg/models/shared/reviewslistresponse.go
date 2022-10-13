package shared

type ReviewsListResponse struct {
	PageInfo        *PageInfo        `json:"pageInfo"`
	Reviews         []Review         `json:"reviews"`
	TokenPagination *TokenPagination `json:"tokenPagination"`
}
