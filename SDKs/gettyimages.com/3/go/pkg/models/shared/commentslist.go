package shared



type CommentsList struct {
    Comments []Comment `json:"comments,omitempty"`
    Permissions *BoardCommentPermissions `json:"permissions,omitempty"`
    
}

