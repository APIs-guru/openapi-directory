package shared



type Review struct {
    AuthorName *string `json:"authorName,omitempty"`
    Comments []Comment `json:"comments,omitempty"`
    ReviewID *string `json:"reviewId,omitempty"`
    
}

