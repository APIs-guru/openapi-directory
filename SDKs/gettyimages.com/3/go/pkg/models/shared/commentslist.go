package shared

type CommentsList struct {
	Comments    []Comment                `json:"comments"`
	Permissions *BoardCommentPermissions `json:"permissions"`
}
