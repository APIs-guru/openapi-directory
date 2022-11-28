package shared

// CommentList
// List of node comments
type CommentList struct {
	Items []Comment `json:"items"`
	Range Range     `json:"range"`
}
