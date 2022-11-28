package shared

// ReviewsListResponse
// Response listing reviews.
type ReviewsListResponse struct {
	PageInfo        *PageInfo        `json:"pageInfo,omitempty"`
	Reviews         []Review         `json:"reviews,omitempty"`
	TokenPagination *TokenPagination `json:"tokenPagination,omitempty"`
}
