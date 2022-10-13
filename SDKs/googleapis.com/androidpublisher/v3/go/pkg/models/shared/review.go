package shared

type Review struct {
	AuthorName *string   `json:"authorName"`
	Comments   []Comment `json:"comments"`
	ReviewID   *string   `json:"reviewId"`
}
