package shared

type TopicMessage struct {
	Content *string `json:"_content"`
}

type Topic struct {
	Author          *string       `json:"author"`
	AuthorIsDeleted *bool         `json:"author_is_deleted"`
	AuthorPathAlias *string       `json:"author_path_alias"`
	Authorname      *string       `json:"authorname"`
	CanDelete       *bool         `json:"can_delete"`
	CanEdit         *bool         `json:"can_edit"`
	CanReply        *bool         `json:"can_reply"`
	CountReplies    *int64        `json:"count_replies"`
	Datecreate      *string       `json:"datecreate"`
	Datelastpost    *string       `json:"datelastpost"`
	Iconfarm        *string       `json:"iconfarm"`
	Iconserver      *string       `json:"iconserver"`
	ID              *string       `json:"id"`
	IsLocked        *bool         `json:"is_locked"`
	IsPro           *bool         `json:"is_pro"`
	IsSticky        *bool         `json:"is_sticky"`
	LastReply       *string       `json:"last_reply"`
	Lastedit        *string       `json:"lastedit"`
	Message         *TopicMessage `json:"message"`
	Role            *string       `json:"role"`
	Subject         *string       `json:"subject"`
}
